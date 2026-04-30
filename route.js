import { adminDb } from '@/lib/firebase-admin';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const orderId = formData.get('orderId') || 'unknown';
    const status = formData.get('status') || 'unknown';

    // TODO: decriptare env_key și data Netopia cu cheia privată

    if (adminDb && (status === 'confirmed' || status === 'paid')) {
      const orderRef = adminDb.collection('orders').doc(orderId);
      const snap = await orderRef.get();
      if (snap.exists) {
        const order = snap.data();
        await orderRef.update({ status: 'paid', paidAt: new Date() });

        const validUntil = new Date();
        validUntil.setMonth(validUntil.getMonth() + 1);
        await adminDb.collection('subscriptions').doc(order.userId).set({
          active: true, planId: order.planId, validUntil,
          lastOrderId: orderId, lastPaymentAmount: order.amount
        }, { merge: true });
      }
    }

    return new Response('<?xml version="1.0" encoding="utf-8"?><crc>OK</crc>', {
      headers: { 'Content-Type': 'application/xml' }
    });
  } catch (error) {
    return new Response(`<?xml version="1.0" encoding="utf-8"?><crc error_type="2" error_code="99">${error.message}</crc>`, {
      headers: { 'Content-Type': 'application/xml' }, status: 500
    });
  }
}
