
/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
export const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_SI_SU",
        editProfile: "B2C_1_edit_profile_v2"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://pruebagtdev.b2clogin.com/pruebagtdev.onmicrosoft.com/B2C_1_SI_SU",
        },
        editProfile: {
            authority: "https://pruebagtdev.b2clogin.com/pruebagtdev.onmicrosoft.com/B2C_1_edit_profile_v2"
        }
    },
    authorityDomain: "pruebagtdev.b2clogin.com"
}

/**
 * Enter here the coordinates of your web API and scopes for access token request
 * The current application coordinates were pre-registered in a B2C tenant.
 */
export const apiConfig: { scopes: string[]; uri: string } = {
    scopes: [ "openid", "offline_access" ],
    uri: 'https://localhost:44300/hello'
};
