<x-mail::message>
# Introduction
    Forget your password ?
    well received a request to reset the password for your account.

    To reset your password, click here

<x-mail::button :url="$url">
Reset Password
</x-mail::button>
    or copy and past the URL into your browser:
    http://localhost:3000/reset-password?token={{$url}}

    This password reset link will expire in 60 minutes.
Thanks,<br>
    Store Aglagal

</x-mail::message>
