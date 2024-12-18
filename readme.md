### **Before Running:**

Install the following toolkits:

- **Node.js**: 16.10.0
- **npm**: 7.24.0
- **TypeScript**: 4.6.4
- **Angular CLI**: 14.0.7
- **MySQL**: 8.0.4



## **Install the Dependencies**

1. **Check Existing Node Versions**

   - List all installed Node.js versions on your computer:

     ```bash
     nvm ls
     ```

   - Check the version of  `nvm` installed:

     ```bash
     nvm --version
     ```

2. **Install Node.js 16.10.0**

   - If Node.js 16.10.0 is not installed, run:

     ```bash
     nvm install 16.10.0
     ```

   - Verify the installed Node.js version:

     ```bash
     node -v
     ```

   - Switch to Node.js 16.10.0:

     ```bash
     nvm use 16.10.0
     ```

3. **Install Angular CLI 14.0.7**

   - Install Angular CLI from a mirror registry:

     ```bash
     sudo npm install @angular/cli@~14.0.7 --registry https://registry.npmmirror.com/
     ```

   - Verify the Angular CLI version:

     ```bash
     ng version
     ```

4. **Install TypeScript 4.6.4**

   - Install the specified TypeScript version:

     ```bash
     npm install typescript@4.6.4
     ```

   - Verify the TypeScript installation:

     ```bash
     tsc -v
     ```

5. **Install Project Dependencies**

   - Navigate to your project directory and run:

     ```bash
     npm install
     ```

6. **Run the Project**

   - Start the Angular development server:

     ```bash
     ng serve
     ```



Solutions to possible problems:

Make sure your node-gyp is using Py version >=3.6 and <=3.10.

If node-gyp problem occurs, try to set node-gyp py version by executing: `npm config set python /opt/homebrew/opt/python@3.10/bin/python3.10`

then check validity: 

```bash
npm config get python
```

should be: /opt/homebrew/opt/python@3.10/bin/python3.10



## Okta Setup

Here’s a step-by-step guide to help you set up Okta according to your requirements:

#### 1. **Register for an Okta Developer Account**

- Go to [Okta Developer](https://developer.okta.com/).
- Click **Sign Up** and create a new account.
- Follow the verification steps to access your developer dashboard.

#### 2. **Create App Integration**

1. In your Okta dashboard:
   - Go to **Applications** > **Applications**.
   - Click **Create App Integration**.
2. **Configure Application Integration**:
   - **Sign-in method**: Select **OIDC - OpenID Connect**.
   - **Application type**: Choose **Single Page Application**.
   - Click **Next**.
3. **General Settings**:
   - **App Integration Name**: Enter a descriptive name (e.g., `My SPA App`).
   - **Sign-in redirect URIs**:
      Add: `http://localhost:4200/login/callback`
   - **Sign-out redirect URIs**:
      Add: `http://localhost:4200`
   - **Assignments**: Select **Allow everyone** if testing.
4. **Federal Broker Mode**:
   - Ensure **Federal Broker Mode** is **Disabled**.
5. Click **Save**.

#### 3. **Enable Self-Service Registration**

1. Go to **Directory** > **Self-Service Registration**.
2. **Enable** the Self-Service Registration option.
3. Configure the default settings as needed:
   - Set **Default Redirect URL** to:
      `http://localhost:4200/login/callback`
4. Save your changes.

#### 4. **Verify Setup**

- Return to 

  Applications

   and verify that your new app configuration includes:

  - **Sign-in redirect URIs**: `http://localhost:4200/login/callback`
  - **Sign-out redirect URIs**: `http://localhost:4200`

- Ensure **Self-Service Registration** is enabled.

#### 5. **Client ID and Setup in Your Application**

- Go back to **Applications** > Select your app.
- Note down the **Client ID**.
- Use this Client ID to configure your front-end (e.g., Angular, React) with Okta’s SDK.

Update your Client ID and Issuer in the following config files:

03-frontend/angular-ecommerce/src/app/config/my-app-config.ts

```typescript
export default {
    oidc: {
        clientId: '<Your_Client_ID>',
        issuer: 'https://dev-<Your_Okta_ID>.okta.com/oauth2/default',
        redirectUri: 'http://localhost:4200/login/callback',
        scopes: ['openid', 'profile', 'email']
    }
}
```

02-backend/spring-boot-ecommerce/src/main/resources/application.properties

```txt
okta.oauth2.client-id=<Your_Client_ID>
okta.oauth2.issuer=https://dev-<Your_Okta_ID>.okta.com/oauth2/default
```



#### 6. **Test the Integration**

- Run your app on `http://localhost:4200`.
- Ensure login/logout flows redirect correctly through Okta.





## Setting Up MySQL Database:

go to application.properties under the backend/spring-boot-ecommerce

```
spring.datasource.url=jdbc:mysql://localhost:3306/<Your_Database_Name>?useSSL=false&useUnicode=yes&characterEncoding=UTF-8&allowPublicKeyRetrieval=true&serverTimezone=UTC
spring.datasource.username=<Database_Username>
spring.datasource.password=<Corresponding_Password>
```

And, run the db-scripts from 01 to 04, sequentially, to set up your database.