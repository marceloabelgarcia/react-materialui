import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/HomeRounded';
import InboxIcon from '@material-ui/icons/Inbox';
import TransferIcon from '@material-ui/icons/Send';
import ShareIcon from '@material-ui/icons/ShareRounded';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import CertifyIcon from 'app/common/CertifyIcon';
import React from 'react';
import Certifiers from '../../certifiers';
import Dashboard from '../../dashboard';
import { Certification, Details, Share, Store, Transfer, Verify } from '../../document';
import { SendCertifiedEmail } from '../../email';
import KeysCertification from '../../keys/certification';
import Notifications from '../../notifications';
import { ContactsView, Profile, RegistrationDetails, Registrations } from '../../user';


export default [
  {
    path: '/dashboard',
    exact: true,
    name: 'Dashboard',
    component: Dashboard,
    menu: 'Dashboard',
    menuIcon: (<HomeIcon color="primary" />),
    isPrivate: true,
  },
  {
    path: '/store',
    exact: true,
    name: 'Mi Caja',
    component: Store,
    menu: 'Mi Caja',
    menuIcon: (<InboxIcon color="primary" />),
    isPrivate: true,
    divider: true,
  },
  {
    path: '/store/documents/:id',
    exact: true,
    name: 'Detalles del documento',
    component: Details,
    isPrivate: true,
  },
  {
    path: '/documents/certify',
    exact: true,
    name: 'Certificar un documento',
    component: Certification,
    menu: 'Certificar documento',
    menuIcon: (<CertifyIcon color="primary" />),
    isPrivate: true,
  },
  {
    path: '/documents/share',
    exact: true,
    name: 'Compartir un documento',
    component: Share,
    menu: 'Compartir documento',
    menuIcon: (<ShareIcon color="primary" />),
    isPrivate: true,
  },
  {
    path: '/documents/verify',
    exact: true,
    name: 'Verificar documento',
    component: Verify,
    menu: 'Verificar documento',
    menuIcon: (<VerifiedUserIcon color="primary" />),
    isPrivate: true,
  },
  {
    path: '/documents/transfer',
    exact: true,
    name: 'Transferir un documento',
    component: Transfer,
    menu: 'Transferir documento',
    menuIcon: <TransferIcon color="primary" />,
    isPrivate: true,
    divider: true,
  },
  {
    path: '/email/send',
    exact: true,
    name: 'Enviar email certificado',
    component: SendCertifiedEmail,
    menu: 'Enviar email certificado',
    menuIcon: (<EmailIcon color="primary" />),
    isPrivate: true,
    divider: true,
  },
  {
    path: '/store/keys',
    exact: true,
    name: 'Certificar Claves',
    component: KeysCertification,
    menu: 'Certificar Claves',
    menuIcon: (<VpnKeyIcon color="primary" />),
    isPrivate: true,
  },
  {
    path: '/profile',
    exact: true,
    name: 'Mi Cuenta',
    component: Profile,
    isPrivate: true,
  },
  {
    path: '/user/contacts',
    exact: true,
    name: 'Contactos',
    component: ContactsView,
    isPrivate: true,
  },
  {
    path: '/admin/certifiers',
    exact: true,
    name: 'Certificadores',
    component: Certifiers,
    isPrivate: true,
  },
  {
    path: '/admin/registrations',
    exact: true,
    name: 'Registros Pendientes',
    component: Registrations,
    isPrivate: true,
  },
  {
    path: '/admin/registrations/:id/details',
    exact: true,
    name: 'Detalles del Registro',
    component: RegistrationDetails,
    isPrivate: true,
  },
  {
    path: '/notifications',
    exact: true,
    name: 'Notificaciones',
    component: Notifications,
    isPrivate: true,
  },
];
