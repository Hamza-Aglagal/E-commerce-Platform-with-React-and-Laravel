<x-mail::message>
# Introduction

    Hi {{$client->fullName}}

Welcome To Store Aglagal

<x-mail::button :url="'http://localhost:3000'">
Get Started
</x-mail::button>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
