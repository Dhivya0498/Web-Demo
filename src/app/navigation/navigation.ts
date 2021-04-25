import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'applications',
        title: '',
        type: 'group',
        icon: 'apps',
        children: [
            {
                id: 'announcement',
                title: 'Announcement',
                type: 'item',
                url: '/apps/main/announcement'
            },
            {
                id: 'login',
                title: 'Log Out',
                type: 'item',
                url: '/login'
            },
        ]
    }
];
