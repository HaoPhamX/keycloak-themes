import { createUseI18n } from 'keycloakify/login'

export const { useI18n } = createUseI18n({
    // NOTE: Here you can override the default i18n messages
    // or define new ones that, for example, you would have
    // defined in the Keycloak admin UI for UserProfile
    // https://user-images.githubusercontent.com/6702424/182050652-522b6fe6-8ee5-49df-aca3-dba2d33f24a5.png
    vi: {
        productTitle: 'Hệ sinh thái Cloud POS Platform',
        productDescription:
            'Giải pháp quản lý toàn diện giúp doanh nghiệp F&B đi đầu xu hướng chuyển đổi số và mở rộng chuỗi kinh doanh bền vững.',
        locale_vi: 'Tiếng Việt',
        loginTitle: 'Đăng nhập Dcorp',
        doLogIn: 'Đăng nhập',
        doRegister: 'Đăng ký',
        doCancel: 'Hủy',
        doSubmit: 'Gởi',
        doBack: 'Trở lại',
        doYes: 'Đồng ý',
        doNo: 'Bỏ qua',
        doContinue: 'Tiếp tục',
        doIgnore: 'Bỏ qua',
        doAccept: 'Đồng ý',
        doDecline: 'Từ chối',
        doForgotPassword: 'Quên mật khẩu?',
        doClickHere: 'Click here',
        doImpersonate: 'Mạo danh',
        doTryAgain: 'Thử lại',
        doTryAnotherWay: 'Thử cách khác',
        doConfirmDelete: 'Xác nhận xóa',
        errorDeletingAccount: 'Đã xảy ra lỗi trong khi xóa tài khoản',
        deletingAccountForbidden:
            'Bạn không có đủ quyền để xóa tài khoản của mình, hãy liên hệ với quản trị viên.',
        kerberosNotConfigured: 'Kerberos không được cấu hình',
        kerberosNotConfiguredTitle: 'Kerberos không được cấu hình',
        bypassKerberosDetail:
            'Hoặc là bạn không được đăng nhập bằng Kerberos hoặc trình duyệt của bạn không được cài đặt cho đăng nhập Kerberos. Vui lòng nhấp tiếp tục để đăng nhập bằng các phương thức khác',
        kerberosNotSetUp:
            'Kerberos không được thiết lập. Bạn không thể đăng nhập.',
        registerTitle: 'Đăng ký',
        loginAccountTitle: 'Đăng nhập',
        loginTitleHtml: '{0}',
        impersonateTitle: '{0} Mạo danh người dùng',
        impersonateTitleHtml: '<strong>{0}</strong> Mạo danh người dùng',
        realmChoice: 'Realm',
        unknownUser: 'Người dùng không xác định',
        loginTotpTitle: 'Thiết lập xác thực di động',
        loginProfileTitle: 'Cập nhật thông tin tài khoản',
        loginIdpReviewProfileTitle: 'Cập nhật thông tin tài khoản',
        loginTimeout:
            'Lần đăng nhập của bạn đã hết hạn. Đăng nhập sẽ bắt đầu từ đầu.',
        reauthenticate: 'Vui lòng xác thực lại để tiếp tục',
        oauthGrantTitle: 'Cấp quyền truy cập cho {0}',
        oauthGrantTitleHtml: '{0}',
        oauthGrantInformation:
            'Đảm bảo bạn tin tưởng {0} bằng cách tìm hiểu cách {0} sẽ xử lý dữ liệu của bạn.',
        oauthGrantReview: 'Bạn có thể xem lại',
        oauthGrantTos: 'điều khoản dịch vụ.',
        oauthGrantPolicy: 'chính sách bảo mật.',
        errorTitle: 'Chúng tôi rất tiếc...',
        errorTitleHtml: 'Chúng tôi <strong> rất tiếc </strong> ...',
        emailVerifyTitle: 'Xác minh email',
        emailForgotTitle: 'Quên mật khẩu?',
        updateEmailTitle: 'Cập nhật email',
        emailUpdateConfirmationSentTitle: 'Đã gửi email xác nhận',
        emailUpdateConfirmationSent:
            'Đã gửi email xác nhận đến {0}. Bạn phải làm theo hướng dẫn của người trước để hoàn tất cập nhật email.',
        emailUpdatedTitle: 'Đã cập nhật email',
        emailUpdated:
            'Email của tài khoản đã được cập nhật thành công thành {0}.',
        updatePasswordTitle: 'Cập nhật mật khẩu',
        codeSuccessTitle: 'Mã thành công',
        codeErrorTitle: 'Mã lỗi: {0}',
        displayUnsupported: 'Loại hiển thị được yêu cầu không được hỗ trợ',
        browserRequired: 'Cần trình duyệt để đăng nhập',
        browserContinue: 'Cần trình duyệt để hoàn tất đăng nhập',
        browserContinuePrompt: 'Mở trình duyệt và tiếp tục đăng nhập? [y/n]:',
        browserContinueAnswer: 'y',
        usb: 'USB',
        nfc: 'NFC',
        bluetooth: 'Bluetooth',
        internal: 'Nội bộ',
        unknown: 'Không xác định',
        termsTitle: 'Điều khoản và điều kiện',
        termsText: '<p>Điều khoản và điều kiện cần được định rõ</p>',
        termsPlainText: 'Điều khoản và điều kiện cần được định rõ.',
        recaptchaFailed: 'Recaptcha không hợp lệ',
        recaptchaNotConfigured:
            'Recaptcha là bắt buộc, nhưng không được cấu hình',
        consentDenied: 'Từ chối chấp thuận.',
        noAccount: 'Chưa có tài khoản?',
        username: 'Tên đăng nhập',
        usernameOrEmail: 'Tên đăng nhập hoặc email',
        firstName: 'Tên đầu tiên',
        givenName: 'Given name',
        fullName: 'Họ và tên',
        lastName: 'Tên họ',
        familyName: 'Family name',
        email: 'Email',
        password: 'Mật khẩu',
        passwordConfirm: 'Xác nhận mật khẩu',
        passwordNew: 'Mật khẩu mới',
        passwordNewConfirm: 'Xác nhận mật khẩu mới',
        rememberMe: 'Nhớ đăng nhập',
        authenticatorCode: 'One-time code',
        address: 'Địa chỉ',
        street: 'Đường',
        locality: 'Tỉnh/Thành',
        region: 'State, Province, or Region',
        postal_code: 'Zip or Postal code',
        country: 'Quốc gia',
        emailVerified: 'Email verified',
        website: 'Web page',
        phoneNumber: 'Điện thoại',
        phoneNumberVerified: 'Phone number verified',
        gender: 'Giới tính',
        birthday: 'Sinh nhật',
        zoneinfo: 'Múi giờ',
        gssDelegationCredential: 'GSS Delegation Credential',
        logoutOtherSessions: 'Đăng xuất khỏi các thiết bị khác',
        profileScopeConsentText: 'Hồ sơ người dùng',
        emailScopeConsentText: 'Địa chỉ email',
        addressScopeConsentText: 'Địa chỉ',
        phoneScopeConsentText: 'Số điện thoại',
        offlineAccessScopeConsentText: 'Truy cập ngoại tuyến',
        samlRoleListScopeConsentText: 'Các vai trò của tôi',
        rolesScopeConsentText: 'Các vai trò người dùng',
        restartLoginTooltip: 'Bắt đầu lại đăng nhập',
        loginTotpIntro:
            'Bạn cần thiết lập máy phát Mật khẩu Một lần để truy cập vào tài khoản này',
        loginTotpStep1:
            'Cài đặt một trong những ứng dụng sau trên điện thoại di động của bạn:',
        loginTotpStep2: 'Mở ứng dụng và quét mã vạch:',
        loginTotpStep3:
            'Nhập mã một lần được cung cấp bởi ứng dụng và nhấp vào Gửi để hoàn tất thiết lập.',
        loginTotpStep3DeviceName:
            'Cung cấp Tên thiết bị để giúp bạn quản lý thiết bị OTP của mình.',
        loginTotpManualStep2: 'Mở ứng dụng và nhập khóa:',
        loginTotpManualStep3:
            'Sử dụng các giá trị cấu hình sau nếu ứng dụng cho phép thiết đặt chúng:',
        loginTotpUnableToScan: 'Không thể quét?',
        loginTotpScanBarcode: 'Quét mã vạch?',
        loginCredential: 'Chứng chỉ',
        loginOtpOneTime: 'Mã một lần',
        loginTotpType: 'Loại',
        loginTotpAlgorithm: 'Thuật toán',
        loginTotpDigits: 'Số',
        loginTotpInterval: 'Khoảng thời gian',
        loginTotpCounter: 'Bộ đếm',
        loginTotpDeviceName: 'Tên thiết bị',
        'loginTotp.totp': 'Dựa trên thời gian',
        'loginTotp.hotp': 'Dựa trên số lượng',
        totpAppFreeOTPName: 'FreeOTP',
        totpAppGoogleName: 'Google Authenticator',
        totpAppMicrosoftAuthenticatorName: 'Microsoft Authenticator',
        loginChooseAuthenticator: 'Chọn phương thức đăng nhập',
        oauthGrantRequest: 'Bạn có cấp quyền truy cập này không?',
        inResource: 'trong',
        oauth2DeviceVerificationTitle: 'Đăng nhập thiết bị',
        verifyOAuth2DeviceUserCode:
            'Nhập mã do thiết bị của bạn cung cấp và nhấp Gửi',
        oauth2DeviceInvalidUserCodeMessage:
            'Mã không hợp lệ, vui lòng thử lại.',
        oauth2DeviceExpiredUserCodeMessage:
            'Mã đã hết hạn. Vui lòng quay lại thiết bị của bạn và thử kết nối lại.',
        oauth2DeviceVerificationCompleteHeader: 'Đăng nhập thiết bị thành công',
        oauth2DeviceVerificationCompleteMessage:
            'Bạn có thể đóng cửa sổ trình duyệt này và quay lại thiết bị của bạn.',
        oauth2DeviceVerificationFailedHeader: 'Đăng nhập thiết bị thất bại',
        oauth2DeviceVerificationFailedMessage:
            'Bạn có thể đóng cửa sổ trình duyệt này và quay lại thiết bị của bạn và thử kết nối lại.',
        oauth2DeviceConsentDeniedMessage: 'Từ chối chấp nhận kết nối thiết bị.',
        oauth2DeviceAuthorizationGrantDisabledMessage:
            'Khách hàng không được phép khởi tạo OAuth 2.0 Device Authorization Grant. Luồng là đã bị tắt cho khách hàng.',
        emailVerifyInstruction1:
            'Một email với hướng dẫn để xác minh địa chỉ email của bạn đã được gửi đến địa chỉ {0}.',
        emailVerifyInstruction2:
            'Chưa nhận được mã xác minh trong email của bạn?',
        emailVerifyInstruction3: 'để gửi lại email.',
        emailLinkIdpTitle: 'Liên kết {0}',
        emailLinkIdp1:
            'Một email với hướng dẫn để liên kết tài khoản {0} {1} với tài khoản {2} của bạn đã được gửi đến bạn.',
        emailLinkIdp2: 'Chưa nhận được mã xác minh trong email của bạn?',
        emailLinkIdp3: 'để gửi lại email.',
        emailLinkIdp4: 'Nếu bạn đã xác minh email trong trình duyệt khác',
        emailLinkIdp5: 'để tiếp tục.',
        backToLogin: '&laquo; Đăng nhập',
        emailInstruction:
            'Vui lòng nhập tên đăng nhập. Chúng tôi sẽ gửi thông tin để tạo lại mật khẩu mới.',
        emailInstructionUsername:
            'Vui lòng nhập tên đăng nhập hoặc email. Chúng tôi sẽ gửi thông tin để tạo lại mật khẩu mới.',
        copyCodeInstruction:
            'Vui lòng sao chép mã này và dán vào ứng dụng của bạn:',
        pageExpiredTitle: 'Trang đã hết hạn',
        pageExpiredMsg1: 'Để bắt đầu lại quá trình đăng nhập',
        pageExpiredMsg2: 'Để tiếp tục quá trình đăng nhập',
        personalInfo: 'Thông tin cá nhân:',
        role_admin: 'Quản trị viên',
        'role_realm-admin': 'Quản trị viên Realm',
        'role_create-realm': 'Tạo realm',
        'role_create-client': 'Tạo client',
        'role_view-realm': 'Xem realm',
        'role_view-users': 'Xem người dùng',
        'role_view-applications': 'Xem ứng dụng',
        'role_view-clients': 'Xem clients',
        'role_view-events': 'Xem sự kiện',
        'role_view-identity-providers': 'Xem nhà cung cấp danh tính',
        'role_manage-realm': 'Quản lý realm',
        'role_manage-users': 'Quản lý người dùng',
        'role_manage-applications': 'Quản lý ứng dụng',
        'role_manage-identity-providers': 'Quản lý nhà cung cấp danh tính',
        'role_manage-clients': 'Quản lý clients',
        'role_manage-events': 'Quản lý sự kiện',
        'role_view-profile': 'Xem hồ sơ',
        'role_manage-account': 'Quản lý tài khoản',
        'role_manage-account-links': 'Quản lý liên kết tài khoản',
        'role_read-token': 'Đọc token',
        'role_offline-access': 'Truy cập ngoại tuyến',
        client_account: 'Tài khoản',
        'client_account-console': 'Bảng điều khiển tài khoản',
        'client_security-admin-console': 'Bảng điều khiển quản trị an ninh',
        'client_admin-cli': 'Admin CLI',
        'client_realm-management': 'Quản lý Realm',
        client_broker: 'Broker',
        requiredFields: 'Các trường bắt buộc',
        invalidUserMessage: 'Tên đăng nhập hoặc mật khẩu không đúng.',
        invalidUsernameMessage: 'Tên đăng nhập không đúng.',
        invalidUsernameOrEmailMessage: 'Tên đăng nhập hoặc email không đúng.',
        invalidPasswordMessage: 'Sai mật khẩu.',
        invalidEmailMessage: 'Sai email.',
        accountDisabledMessage:
            'Tài khoản bị khóa. Vui lòng liên hệ người quản trị.',
        accountTemporarilyDisabledMessage:
            'Account is temporarily disabled; contact your administrator or retry later.',
        expiredCodeMessage:
            'Phiên làm việc đã hết hạn. Xin vui lòng đăng nhập lại.',
        expiredActionMessage:
            'Hành động đã hết hạn. Vui lòng tiếp tục với việc đăng nhập ngay bây giờ.',
        expiredActionTokenNoSessionMessage: 'Hành động đã hết hạn.',
        expiredActionTokenSessionExistsMessage:
            'Hành động đã hết hạn. Vui lòng bắt đầu lại.',
        sessionLimitExceeded: 'Có quá nhiều phiên',
        missingFirstNameMessage: 'Vui lòng chỉ định tên đầu tiên.',
        missingLastNameMessage: 'Vui lòng chỉ định họ.',
        missingEmailMessage: 'Vui lòng chỉ định email.',
        missingUsernameMessage: 'Vui lòng chỉ định tên người dùng.',
        missingPasswordMessage: 'Vui lòng chỉ định mật khẩu.',
        missingTotpMessage: 'Vui lòng chỉ định mã xác thực.',
        missingTotpDeviceNameMessage: 'Vui lòng chỉ định tên thiết bị.',
        notMatchPasswordMessage: 'Mật khẩu không khớp.',
        'error-invalid-value': 'Giá trị không hợp lệ.',
        'error-invalid-blank': 'Vui lòng chỉ định giá trị.',
        'error-empty': 'Vui lòng chỉ định giá trị.',
        'error-invalid-length': 'Độ dài phải nằm giữa {1} và {2}.',
        'error-invalid-length-too-short': 'Độ dài tối thiểu là {1}.',
        'error-invalid-length-too-long': 'Độ dài tối đa là {2}.',
        'error-invalid-email': 'Địa chỉ email không hợp lệ.',
        'error-invalid-number': 'Số không hợp lệ.',
        'error-number-out-of-range': 'Số phải nằm giữa {1} và {2}.',
        'error-number-out-of-range-too-small':
            'Số phải có giá trị tối thiểu là {1}.',
        'error-number-out-of-range-too-big':
            'Số phải có giá trị tối đa là {2}.',
        'error-pattern-no-match': 'Giá trị không hợp lệ.',
        'error-invalid-uri': 'URL không hợp lệ.',
        'error-invalid-uri-scheme': 'Lược đồ URL không hợp lệ.',
        'error-invalid-uri-fragment': 'Phần đoạn URL không hợp lệ.',
        'error-user-attribute-required': 'Vui lòng chỉ định trường này.',
        'error-invalid-date': 'Ngày không hợp lệ.',
        'error-user-attribute-read-only': 'Trường này chỉ để đọc.',
        'error-username-invalid-character': 'Giá trị chứa ký tự không hợp lệ.',
        'error-person-name-invalid-character':
            'Giá trị chứa ký tự không hợp lệ.',
        invalidPasswordExistingMessage: 'Mật khẩu hiện tại không hợp lệ.',
        invalidPasswordBlacklistedMessage:
            'Mật khẩu không hợp lệ: mật khẩu nằm trong danh sách đen.',
        invalidPasswordConfirmMessage: 'Xác nhận mật khẩu không khớp.',
        invalidTotpMessage: 'Mã xác thực một lần không hợp lệ.',
        usernameExistsMessage: 'Tên người dùng đã tồn tại.',
        emailExistsMessage: 'Email đã tồn tại.',
        federatedIdentityExistsMessage:
            'Người dùng với {0} {1} đã tồn tại. Vui lòng đăng nhập vào quản lý tài khoản để liên kết tài khoản.',
        federatedIdentityUnavailableMessage:
            'Người dùng {0} được xác thực bằng nhà cung cấp danh tính {1} không tồn tại. Vui lòng liên hệ với quản trị viên của bạn.',
        confirmLinkIdpTitle: 'Tài khoản đã tồn tại',
        federatedIdentityConfirmLinkMessage:
            'Người dùng với {0} {1} đã tồn tại. Bạn muốn tiếp tục như thế nào?',
        federatedIdentityConfirmReauthenticateMessage:
            'Xác thực để liên kết tài khoản của bạn với {0}',
        nestedFirstBrokerFlowMessage:
            'Người dùng {0} {1} không được liên kết với bất kỳ người dùng đã biết nào.',
        confirmLinkIdpReviewProfile: 'Xem lại hồ sơ',
        confirmLinkIdpContinue: 'Thêm vào tài khoản hiện tại',
        configureTotpMessage:
            'Bạn cần thiết lập Ứng dụng xác thực di động để kích hoạt tài khoản của bạn.',
        configureBackupCodesMessage:
            'Bạn cần thiết lập Mã dự phòng để kích hoạt tài khoản của bạn.',
        updateProfileMessage:
            'Bạn cần cập nhật hồ sơ người dùng của mình để kích hoạt tài khoản của bạn.',
        updatePasswordMessage:
            'Bạn cần thay đổi mật khẩu của mình để kích hoạt tài khoản của bạn.',
        updateEmailMessage:
            'Bạn cần cập nhật địa chỉ email của mình để kích hoạt tài khoản của bạn.',
        resetPasswordMessage: 'Bạn cần thay đổi mật khẩu của mình.',
        verifyEmailMessage:
            'Bạn cần xác minh địa chỉ email của mình để kích hoạt tài khoản của bạn.',
        linkIdpMessage:
            'Bạn cần xác minh địa chỉ email của mình để liên kết tài khoản của bạn với {0}.',
        emailSentMessage: 'Bạn đã nhận được email hướng dẫn tạo lại mật khẩu.',
        emailSendErrorMessage:
            'Lỗi trong quá trình gửi mail. Vui lòng thử lại sau.',
        accountUpdatedMessage: 'Tài khoản của bạn đã được cập nhật.',
        accountPasswordUpdatedMessage: 'Mật khẩu của bạn đã được cập nhật.',
        delegationCompleteHeader: 'Đăng nhập thành công',
        delegationCompleteMessage:
            'Bạn có thể đóng cửa sổ trình duyệt này và quay lại thiết bị của mình.',
        delegationFailedHeader: 'Đăng nhập thất bại',
        delegationFailedMessage:
            'Bạn có thể đóng cửa sổ trình duyệt này và quay lại thiết bị của mình và thử kết nối lại.',
        noAccessMessage: 'Không truy cập',
        invalidPasswordMinLengthMessage:
            'Mật khẩu không hợp lệ: Tối thiểu {0} ký tự.',
        invalidPasswordMaxLengthMessage:
            'Mật khẩu không hợp lệ: Tối đa {0} ký tự.',
        invalidPasswordMinDigitsMessage:
            'Mật khẩu không hợp lệ: Ít nhất {0} chữ số.',
        invalidPasswordMinLowerCaseCharsMessage:
            'Mật khẩu không hợp lệ: phải chứa ít nhất {0} ký tự chữ thường.',
        invalidPasswordMinUpperCaseCharsMessage:
            'Mật khẩu không hợp lệ: phải chứa ít nhất {0} ký tự chữ hoa.',
        invalidPasswordMinSpecialCharsMessage:
            'Mật khẩu không hợp lệ: phải chứa ít nhất {0} ký tự đặc biệt.',
        invalidPasswordNotUsernameMessage:
            'Mật khẩu không hợp lệ: không được trùng với tên người dùng.',
        invalidPasswordNotEmailMessage:
            'Mật khẩu không hợp lệ: không được trùng với email.',
        invalidPasswordRegexPatternMessage:
            'Mật khẩu không hợp lệ: không khớp với mẫu regex.',
        invalidPasswordHistoryMessage:
            'Mật khẩu không hợp lệ: không được trùng với {0} mật khẩu cuối cùng.',
        invalidPasswordGenericMessage:
            'Mật khẩu không hợp lệ: mật khẩu mới không khớp với các chính sách mật khẩu.',
        failedToProcessResponseMessage: 'Không thể xử lý phản hồi',
        httpsRequiredMessage: 'Yêu cầu HTTPS',
        realmNotEnabledMessage: 'Realm không được kích hoạt',
        invalidRequestMessage: 'Yêu cầu không hợp lệ',
        successLogout: 'Bạn đã đăng xuất',
        failedLogout: 'Đăng xuất thất bại',
        unknownLoginRequesterMessage:
            'Không xác định được người yêu cầu đăng nhập',
        loginRequesterNotEnabledMessage:
            'Người yêu cầu đăng nhập không được kích hoạt',
        bearerOnlyMessage:
            'Ứng dụng chỉ chứa-người mang không được phép khởi tạo đăng nhập trình duyệt',
        standardFlowDisabledMessage:
            'Khách hàng không được phép khởi tạo đăng nhập trình duyệt với response_type đã cho. Luồng chuẩn bị tắt cho khách hàng.',
        implicitFlowDisabledMessage:
            'Khách hàng không được phép khởi tạo đăng nhập trình duyệt với response_type đã cho. Luồng ngầm bị tắt cho khách hàng.',
        invalidRedirectUriMessage: 'Uri chuyển hướng không hợp lệ',
        unsupportedNameIdFormatMessage:
            'Định dạng NameIDFormat không được hỗ trợ',
        invalidRequesterMessage: 'Người yêu cầu không hợp lệ',
        registrationNotAllowedMessage: 'Đăng ký không được cho phép',
        resetCredentialNotAllowedMessage:
            'Không được phép Đặt lại thông tin xác thực',
        permissionNotApprovedMessage: 'Quyền không được chấp thuận.',
        noRelayStateInResponseMessage:
            'Không có trạng thái tiếp sức trong phản hồi từ nhà cung cấp danh tính.',
        insufficientPermissionMessage: 'Quyền không đủ để liên kết danh tính.',
        couldNotProceedWithAuthenticationRequestMessage:
            'Không thể tiếp tục với yêu cầu xác thực đến nhà cung cấp danh tính.',
        couldNotObtainTokenMessage:
            'Không thể nhận token từ nhà cung cấp danh tính.',
        unexpectedErrorRetrievingTokenMessage:
            'Lỗi không mong đợi khi lấy token từ nhà cung cấp danh tính.',
        unexpectedErrorHandlingResponseMessage:
            'Lỗi bất ngờ khi xử lý phản hồi từ nhà cung cấp danh tính.',
        identityProviderAuthenticationFailedMessage:
            'Xác thực không thành công. Không thể xác thực với nhà cung cấp danh tính.',
        couldNotSendAuthenticationRequestMessage:
            'Không thể gửi yêu cầu xác thực đến nhà cung cấp danh tính.',
        unexpectedErrorHandlingRequestMessage:
            'Lỗi không mong đợi khi xử lý yêu cầu xác thực đến nhà cung cấp danh tính.',
        invalidAccessCodeMessage: 'Mã truy cập không hợp lệ.',
        sessionNotActiveMessage: 'Phiên không hoạt động.',
        invalidCodeMessage:
            'Đã xảy ra lỗi, vui lòng đăng nhập lại thông qua ứng dụng của bạn.',
        cookieNotFoundMessage:
            'Không tìm thấy cookie. Hãy đảm bảo rằng cookie đã được kích hoạt trong trình duyệt của bạn.',
        insufficientLevelOfAuthentication:
            'Cấp độ xác thực được yêu cầu không được đáp ứng.',
        identityProviderUnexpectedErrorMessage:
            'Lỗi bất ngờ khi xác thực với nhà cung cấp danh tính',
        identityProviderMissingStateMessage:
            'Thiếu tham số trạng thái trong phản hồi từ nhà cung cấp danh tính.',
        identityProviderInvalidResponseMessage:
            'Phản hồi không hợp lệ từ nhà cung cấp danh tính.',
        identityProviderInvalidSignatureMessage:
            'Chữ ký không hợp lệ trong phản hồi từ nhà cung cấp danh tính.',
        identityProviderNotFoundMessage:
            'Không thể tìm thấy nhà cung cấp danh tính có định danh.',
        identityProviderLinkSuccess:
            'Bạn đã xác minh email của mình thành công. Vui lòng quay lại trình duyệt gốc của bạn và tiếp tục với việc đăng nhập.',
        staleCodeMessage:
            'Trang này không còn hợp lệ, vui lòng quay lại ứng dụng của bạn và đăng nhập lại',
        realmSupportsNoCredentialsMessage:
            'Realm không hỗ trợ bất kỳ kiểu thông tin xác thực nào.',
        credentialSetupRequired:
            'Không thể đăng nhập, yêu cầu thiết lập thông tin xác thực.',
        identityProviderNotUniqueMessage:
            'Realm hỗ trợ nhiều nhà cung cấp danh tính. Không thể xác định nhà cung cấp danh tính nào nên được sử dụng để xác thực.',
        emailVerifiedMessage: 'Địa chỉ email của bạn đã được xác minh.',
        staleEmailVerificationLink:
            'Liên kết bạn nhấp vào là liên kết cũ và không còn hợp lệ. Có thể bạn đã xác minh email của mình.',
        identityProviderAlreadyLinkedMessage:
            'Danh tính liên kết đã được trả lại bởi {0} đã được liên kết với người dùng khác.',
        confirmAccountLinking:
            'Xác nhận liên kết tài khoản {0} của nhà cung cấp danh tính {1} với tài khoản của bạn.',
        confirmEmailAddressVerification:
            'Xác nhận hiệu lực của địa chỉ email {0}.',
        confirmExecutionOfActions: 'Thực hiện các hành động sau',
        locale_ar: 'Arabic',
        locale_ca: 'Català',
        locale_cs: 'Čeština',
        locale_da: 'Dansk',
        locale_de: 'Deutsch',
        locale_en: 'English',
        locale_es: 'Español',
        locale_fr: 'Français',
        locale_hu: 'Magyar',
        locale_it: 'Italiano',
        locale_ja: 'Tiếng Nhật',
        locale_lt: 'Lietuvių',
        locale_nl: 'Nederlands',
        locale_no: 'Norsk',
        locale_pl: 'Polski',
        locale_pt_BR: 'Português (Brasil)',
        'locale_pt-BR': 'Português (Brasil)',
        locale_ru: 'Русский',
        locale_sk: 'Slovenčina',
        locale_sv: 'Svenska',
        locale_tr: 'Türkçe',
        'locale_zh-CN': '中文简体',
        locale_fi: 'Suomi',
        backToApplication: '&laquo; Quay lại Ứng dụng',
        missingParameterMessage: 'Thiếu tham số: {0}',
        clientNotFoundMessage: 'Không tìm thấy client.',
        clientDisabledMessage: 'Client đã bị vô hiệu hóa.',
        invalidParameterMessage: 'Tham số không hợp lệ: {0}',
        alreadyLoggedIn: 'Bạn đã đăng nhập.',
        differentUserAuthenticated:
            "Bạn đã được xác thực là người dùng khác ''{0}'' trong phiên này. Vui lòng đăng xuất trước.",
        brokerLinkingSessionExpired:
            'Yêu cầu liên kết tài khoản broker, nhưng phiên hiện tại không còn hợp lệ.',
        proceedWithAction: '&raquo; Nhấp vào đây để tiếp tục',
        acrNotFulfilled: 'Yêu cầu xác thực chưa được thực hiện',
        'requiredAction.CONFIGURE_TOTP': 'Cấu hình OTP',
        'requiredAction.terms_and_conditions': 'Điều khoản và Điều kiện',
        'requiredAction.UPDATE_PASSWORD': 'Cập nhật Mật khẩu',
        'requiredAction.UPDATE_PROFILE': 'Cập nhật Hồ sơ',
        'requiredAction.VERIFY_EMAIL': 'Xác minh Email',
        'requiredAction.CONFIGURE_RECOVERY_AUTHN_CODES': 'Tạo Mã khôi phục',
        'requiredAction.webauthn-register-passwordless':
            'Webauthn Đăng ký Mật khẩu',
        invalidTokenRequiredActions:
            'Các hành động bắt buộc được bao gồm trong liên kết không hợp lệ',
        doX509Login: 'Bạn sẽ đăng nhập như:',
        clientCertificate: 'Chứng chỉ client X509:',
        noCertificate: '[Không có Chứng chỉ]',
        pageNotFound: 'Không tìm thấy trang',
        internalServerError: 'Đã xảy ra lỗi nội bộ',
        'console-username': 'Tên người dùng:',
        'console-password': 'Mật khẩu:',
        'console-otp': 'Mật khẩu một lần:',
        'console-new-password': 'Mật khẩu mới:',
        'console-confirm-password': 'Xác nhận mật khẩu:',
        'console-update-password': 'Cần cập nhật mật khẩu của bạn.',
        'console-verify-email':
            'Bạn cần xác minh địa chỉ email của mình.  Chúng tôi đã gửi email đến {0} chứa mã xác minh.  Vui lòng nhập mã này vào ô dưới đây.',
        'console-email-code': 'Mã Email:',
        'console-accept-terms': 'Chấp nhận các Điều khoản? [y/n]:',
        'console-accept': 'y',
        'openshift.scope.user_info': 'Thông tin người dùng',
        'openshift.scope.user_check-access':
            'Thông tin truy cập của người dùng',
        'openshift.scope.user_full': 'Toàn quyền truy cập',
        'openshift.scope.list-projects': 'Danh sách các dự án',
        'saml.post-form.title': 'Chuyển hướng Xác thực',
        'saml.post-form.message': 'Đang chuyển hướng, vui lòng đợi.',
        'saml.post-form.js-disabled':
            'JavaScript bị vô hiệu hóa. Chúng tôi khuyên bạn nên kích hoạt nó. Nhấp vào nút dưới đây để tiếp tục.',
        'saml.artifactResolutionServiceInvalidResponse':
            'Không thể giải quyết artifact.',
        'otp-display-name': 'Ứng dụng Xác thực',
        'otp-help-text': 'Nhập mã xác thực từ ứng dụng xác thực.',
        'password-display-name': 'Mật khẩu',
        'password-help-text': 'Đăng nhập bằng cách nhập mật khẩu của bạn.',
        'auth-username-form-display-name': 'Tên người dùng',
        'auth-username-form-help-text':
            'Bắt đầu đăng nhập bằng cách nhập tên người dùng của bạn',
        'auth-username-password-form-display-name':
            'Tên người dùng và mật khẩu',
        'auth-username-password-form-help-text':
            'Đăng nhập bằng cách nhập tên người dùng và mật khẩu của bạn.',
        'auth-recovery-authn-code-form-display-name': 'Mã Xác thực Khôi phục',
        'auth-recovery-authn-code-form-help-text':
            'Nhập mã xác thực khôi phục từ danh sách đã tạo trước đó.',
        'auth-recovery-code-info-message': 'Nhập mã khôi phục được chỉ định.',
        'auth-recovery-code-prompt': 'Mã khôi phục #{0}',
        'auth-recovery-code-header': 'Đăng nhập với mã xác thực khôi phục',
        'recovery-codes-error-invalid': 'Mã xác thực khôi phục không hợp lệ',
        'recovery-code-config-header': 'Mã Xác thực Khôi phục',
        'recovery-code-config-warning-title':
            'Những mã khôi phục này sẽ không hiển thị lại sau khi rời khỏi trang này',
        'recovery-code-config-warning-message':
            'Hãy chắc chắn in, tải xuống hoặc sao chép chúng vào trình quản lý mật khẩu và giữ chúng an toàn. Hủy thiết lập này sẽ loại bỏ những mã khôi phục này khỏi tài khoản của bạn.',
        'recovery-codes-print': 'In',
        'recovery-codes-download': 'Tải xuống',
        'recovery-codes-copy': 'Sao chép',
        'recovery-codes-copied': 'Đã sao chép',
        'recovery-codes-confirmation-message':
            'Tôi đã lưu mã này vào một nơi an toàn',
        'recovery-codes-action-complete': 'Hoàn thành cài đặt',
        'recovery-codes-action-cancel': 'Hủy cài đặt',
        'recovery-codes-download-file-header':
            'Giữ những mã khôi phục này ở một nơi an toàn.',
        'recovery-codes-download-file-description':
            'Mã khôi phục là các mã thông qua một lần cho phép bạn đăng nhập vào tài khoản của bạn nếu bạn không có quyền truy cập vào trình xác thực của mình.',
        'recovery-codes-download-file-date': ' Những mã này được tạo ra vào',
        'recovery-codes-label-default': 'Mã khôi phục',
        'webauthn-display-name': 'Khóa bảo mật',
        'webauthn-help-text': 'Sử dụng khóa bảo mật của bạn để đăng nhập.',
        'webauthn-passwordless-display-name': 'Khóa bảo mật',
        'webauthn-passwordless-help-text':
            'Sử dụng khóa bảo mật cho việc đăng nhập không mật khẩu.',
        'webauthn-login-title': 'Đăng nhập với Khóa bảo mật',
        'webauthn-registration-title': 'Đăng ký Khóa bảo mật',
        'webauthn-available-authenticators': 'Khóa bảo mật có sẵn',
        'webauthn-unsupported-browser-text':
            'WebAuthn không được hỗ trợ bởi trình duyệt này. Hãy thử một trình duyệt khác hoặc liên hệ với quản trị viên của bạn.',
        'webauthn-doAuthenticate': 'Đăng nhập bằng Khóa Bảo mật',
        'webauthn-createdAt-label': 'Được tạo',
        'webauthn-error-title': 'Lỗi Khóa Bảo mật',
        'webauthn-error-registration':
            'Đăng ký Khóa Bảo mật của bạn thất bại.<br/> {0}',
        'webauthn-error-api-get':
            'Không thể xác thực bằng Khóa Bảo mật.<br/> {0}',
        'webauthn-error-different-user':
            'Người dùng đầu tiên được xác thực không phải là người được xác thực bằng Khóa Bảo mật.',
        'webauthn-error-auth-verification':
            'Kết quả xác thực Khóa Bảo mật không hợp lệ.<br/> {0}',
        'webauthn-error-register-verification':
            'Kết quả đăng ký Khóa Bảo mật không hợp lệ.<br/> {0}',
        'webauthn-error-user-not-found':
            'Người dùng không xác định được xác thực bởi Khóa Bảo mật.',
        'identity-provider-redirector':
            'Kết nối với Nhà cung cấp Danh tính khác',
        'identity-provider-login-label': 'Hoặc đăng nhập bằng',
        'idp-email-verification-display-name': 'Xác nhận Email',
        'idp-email-verification-help-text':
            'Liên kết tài khoản của bạn bằng cách xác nhận email của bạn.',
        'idp-username-password-form-display-name': 'Tên người dùng và mật khẩu',
        'idp-username-password-form-help-text':
            'Liên kết tài khoản của bạn bằng cách đăng nhập.',
        finalDeletionConfirmation:
            'Nếu bạn xóa tài khoản của mình, nó không thể được khôi phục. Để giữ tài khoản của bạn, hãy nhấp vào Hủy.',
        irreversibleAction: 'Hành động này không thể đảo ngược',
        deleteAccountConfirm: 'Xác nhận xóa tài khoản',
        deletingImplies: 'Xóa tài khoản của bạn bao gồm:',
        errasingData: 'Xóa tất cả dữ liệu của bạn',
        loggingOutImmediately: 'Đăng xuất bạn ngay lập tức',
        accountUnusable:
            'Bất kỳ việc sử dụng tiếp theo của ứng dụng sẽ không thể thực hiện với tài khoản này',
        userDeletedSuccessfully: 'Người dùng đã được xóa thành công',
        'access-denied': 'Truy cập bị từ chối',
        'access-denied-when-idp-auth':
            'Truy cập bị từ chối khi xác thực với {0}',
        'frontchannel-logout.title': 'Đăng xuất',
        'frontchannel-logout.message':
            'Bạn đang đăng xuất khỏi các ứng dụng sau',
        logoutConfirmTitle: 'Đăng xuất',
        logoutConfirmHeader: 'Bạn có muốn đăng xuất không?',
        doLogout: 'Đăng xuất',
        readOnlyUsernameMessage:
            'Bạn không thể cập nhật tên người dùng của mình vì nó chỉ đọc.',
    },
    //@ts-ignore
    en: {
        productTitle: 'Cloud POS Platform ecosystem',
        productDescription:
            'A comprehensive management solution that helps F&B businesses stay ahead of the digital transformation trend and expand their sustainable business chains.',
        locale_vi: 'Vietnamese',
        loginTitle: 'Sign in to DCORP',
    },
})

export type I18n = NonNullable<ReturnType<typeof useI18n>>
