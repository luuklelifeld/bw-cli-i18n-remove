import { I18nService as BaseI18nService } from "@bitwarden/common/services/i18n.service";

export class I18nService extends BaseI18nService {
  constructor(systemLanguage: string, localesDirectory: string) {
    super(systemLanguage, localesDirectory, (formattedLocale: string) => {
      const locales = {
        bitwarden: {
          message: "Bitwarden",
        },
        authenticatorAppTitle: {
          message: "Authenticator App",
        },
        yubiKeyTitle: {
          message: "YubiKey OTP Security Key",
        },
        emailTitle: {
          message: "Email",
        },
        noneFolder: {
          message: "No Folder",
        },
        importEncKeyError: {
          message:
            "Error decrypting the exported file. Your encryption key does not match the encryption key used export the data.",
        },
        invalidFilePassword: {
          message:
            "Invalid file password, please use the password you entered when you created the export file.",
        },
        importPasswordRequired: {
          message: "File is password protected, please provide a decryption password.",
        },
        importFormatError: {
          message: "Data is not formatted correctly. Please check your import file and try again.",
        },
        importNothingError: {
          message: "Nothing was imported.",
        },
        verificationCodeRequired: {
          message: "Verification code is required.",
        },
        invalidVerificationCode: {
          message: "Invalid verification code.",
        },
        masterPassRequired: {
          message: "Master password is required.",
        },
        invalidMasterPassword: {
          message: "Invalid master password.",
        },
        sessionTimeout: {
          message: "Your session has timed out. Please go back and try logging in again.",
        },
        ssoKeyConnectorError: {
          message:
            "Key Connector error: make sure Key Connector is available and working correctly.",
        },
      }; // strip the BOM
      return Promise.resolve(locales);
    });

    this.supportedTranslationLocales = ["en"];
  }
}
