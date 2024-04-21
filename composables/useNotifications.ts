import { PushNotifications } from '@capacitor/push-notifications';
import { isPlatform, getPlatforms } from '@ionic/vue';

export const useNotifications = () => {

    console.log("🚀 ~ addListeners ~ isPlatform('hybrid'):", isPlatform('hybrid'))
    console.log("🚀 ~ useNotifications ~ getPlatforms():", getPlatforms())
    
    const addListeners = async () => {
        if (!isPlatform('desktop')) {
            await PushNotifications.addListener('registration', token => {
                console.info('Registration token: ', token.value);
            });

            await PushNotifications.addListener('registrationError', err => {
                console.error('Registration error: ', err.error);
            });

            await PushNotifications.addListener('pushNotificationReceived', notification => {
                console.log('Push notification received: ', notification);
            });

            await PushNotifications.addListener('pushNotificationActionPerformed', notification => {
                console.log('Push notification action performed', notification.actionId, notification.inputValue);
            });
        }
    }

    const registerNotifications = async () => {
        if (!isPlatform('desktop')) {
            let permStatus = await PushNotifications.checkPermissions();

            if (permStatus.receive === 'prompt') {
                permStatus = await PushNotifications.requestPermissions();
            }

            if (permStatus.receive !== 'granted') {
                throw new Error('User denied permissions!');
            }

            await PushNotifications.register();
        }
    }

    const getDeliveredNotifications = async () => {
        
        console.log("🚀 ~ getDeliveredNotifications ~ isPlatform('desktop'):", isPlatform('desktop'))
        if (!isPlatform('desktop')) {
            const notificationList = await PushNotifications.getDeliveredNotifications();
            console.log('delivered notifications', notificationList);
        }
    }
    return {
        addListeners,
        registerNotifications,
        getDeliveredNotifications,
    };
}
    
    
