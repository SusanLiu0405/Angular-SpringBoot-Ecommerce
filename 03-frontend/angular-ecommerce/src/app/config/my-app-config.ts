export default {
    oidc: {
        clientId: '<Your_Client_ID>',
        issuer: 'https://dev-<Your_Okta_ID>.okta.com/oauth2/default',
        redirectUri: 'http://localhost:4200/login/callback',
        scopes: ['openid', 'profile', 'email']
    }
}