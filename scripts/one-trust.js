jQuery(document).ready(function () {
    jQuery("form#HTHPRO").submit(function () {

        var error = '0';
        jQuery('.formFields').each(function () {
            if (jQuery('.formFields').find('label.error').is(":visible")) {
                error = 'DEU ERRO';
            }
        });
        console.log(error);

        if (error == false && jQuery('input[name="Aceito os Termos de Politica de Privacidade"]').is(':checked')) {
            var empresa = jQuery('input[name="campoEmpresa"]').val();
            var nome = jQuery('input[name="campoNome"]').val();
            var telefone = jQuery('input[name="campoTelefone"]').val();
            var email = jQuery('input[name="campoEmail"]').val();
            var cargo = jQuery('input[name="campoCargo"]').val();
            var comunicacao = jQuery('input[name="Aceito os termos de Comunicacoes da hthPRO"]').val();


            $.ajax({
                beforeSend: function (xhrObj) {
                    xhrObj.setRequestHeader("Content-Type", "application/json");
                    xhrObj.setRequestHeader("Accept", "application/json");
                },
                type: "POST",
                url: "https://privacyportaltrial.onetrust.com/request/v1/consentreceipts",
                data: JSON.stringify({
                    identifier: email,
                    requestInformation: 'eyJhbGciOiJSUzUxMiJ9.eyJvdEp3dFZlcnNpb24iOjEsInByb2Nlc3NJZCI6IjMxYTVlOGYzLTU5MDItNDEzOC05NzAwLTlkNDY3MDMzOGFhZSIsInByb2Nlc3NWZXJzaW9uIjoyLCJpYXQiOiIyMDIzLTAxLTA1VDEyOjA1OjMxLjEwNyIsIm1vYyI6IkFQSSIsInBvbGljeV91cmkiOm51bGwsInN1YiI6IkVtYWlsIiwiaXNzIjpudWxsLCJ0ZW5hbnRJZCI6IjQ3MjdlZjFkLTkzNjAtNGU1Mi04NTljLThmNzNkZDdjMmNjOSIsImRlc2NyaXB0aW9uIjoidGVzdGUiLCJjb25zZW50VHlwZSI6IkNPTkRJVElPTkFMVFJJR0dFUiIsImFsbG93Tm90R2l2ZW5Db25zZW50cyI6ZmFsc2UsImRvdWJsZU9wdEluIjpmYWxzZSwicHVycG9zZXMiOlt7ImlkIjoiZWQyYjgyZTMtZGIwYi00NDgxLWE1NWUtNGEzZDBjYzU3ODkxIiwidmVyc2lvbiI6MSwicGFyZW50SWQiOm51bGwsInRvcGljcyI6W10sImN1c3RvbVByZWZlcmVuY2VzIjpbXSwiZW5hYmxlR2VvbG9jYXRpb24iOmZhbHNlfV0sIm5vdGljZXMiOltdLCJkc0RhdGFFbGVtZW50cyI6WyJOYW1lIiwiZW1wcmVzYSIsIkNpZGFkZSJdLCJhdXRoZW50aWNhdGlvblJlcXVpcmVkIjpmYWxzZSwicmVjb25maXJtQWN0aXZlUHVycG9zZSI6ZmFsc2UsIm92ZXJyaWRlQWN0aXZlUHVycG9zZSI6dHJ1ZSwiZHluYW1pY0NvbGxlY3Rpb25Qb2ludCI6ZmFsc2UsImFkZGl0aW9uYWxJZGVudGlmaWVycyI6W10sIm11bHRpcGxlSWRlbnRpZmllclR5cGVzIjpmYWxzZSwiZW5hYmxlUGFyZW50UHJpbWFyeUlkZW50aWZpZXJzIjpmYWxzZSwicGFyZW50UHJpbWFyeUlkZW50aWZpZXJzVHlwZSI6bnVsbCwiYWRkaXRpb25hbFBhcmVudElkZW50aWZpZXJUeXBlcyI6W10sImVuYWJsZUdlb2xvY2F0aW9uIjpmYWxzZX0.KG3LesaqvnySS4czCl4Xae4JWQmnyXqcYoUF6b7zfS3mH4mescTNJIWHvDBndG3KTzfcMp42uWaJJGPArBQGU7oYX3FpjGggjbT7Gi5RsJjlj0ldTpCiNnEHbkq2LrfhnXH7ktM4I_FwtWg8klPICKqb-Aw66uAd24IvLnDHI45L2jxBMRXw8LjfL8SUWdEP9uqf7sEZFuM9bs8lYLw743iz4OQwdyPYdo1D5QIQyABWjveR-cLcqHZS1TfQQSsncZPrIGnRqdss_d83r50h0zj5baFu9CzU4LPzgk1flEgf-eb2tKa4BN2K0CcowjHCZK5q14gOP9B-rsYO9Jr_i9svLWxAe2ge8T4goyw-ZnACCsYxDi_I8aI0gEei33MB7nwF7qEebWMA2Z1NJ4CwUenGoO1RtzZsriy0jGQwtA2y99ezG2fJvPs9V9xGZhS49mPXO_Vq32Fk_iO3kcDjYUeN_2IN84_bnXXp7KjA9chVvXMu2v85osnph9IPCejmyKj5JB1VSBSrs_AWdt8iUEbvKoy9zS_j4rAI3-J5PfLF-MBMo8nq9HYeknwCS0_1p0Z5zXKWtOsqhNwwpnaOEUj7onIlxsLQ8wpYCV9Vw-DTfwMj2BQp88yY7L0MUXPyox2O6t4bqclrIzC9mggMqfR56CcmQl4ctEegtXDm70Q',
                    purposes: [
                        {
                            "Id": "ed2b82e3-db0b-4481-a55e-4a3d0cc57891",
                            "TransactionType": "CONFIRMED"
                        }
                    ],
                    "dsDataElements": {
                        "Name": nome,
                        "empresa": empresa,
                        "Cidade": cidade,
                        "Email": email,
                        "Telefone": telefone,
                        "Cargo": cargo,
                        "Comunicacao": comunicacao

                    }
                }),
                dataType: "json",
                success: function (json) {
                    console.log(json);
                }


            });
        }

    });

});