$(document).ready(function () {
    $("form").submit(function (event) {
        $(".form-group").removeClass("has-error");
        $(".help-block").remove();

        var formData = {
            txt_nome: $("#txt_nome").val(),
            txt_email: $("#txt_email").val(),
            txt_mensagem: $("#txt_mensagem").val()
        };

        $.ajax({
            type: "POST",
            url: "process.php",
            data: formData,
            dataType: "json",
            encode: true,
        })
        .done(function (data) {
            if (!data.success && data.errors) {
                if (data.errors.txt_nome) {
                    $("#nome-group").addClass("has-error");
                    $("#nome-group").append(
                        '<div class="help-block input-group mb-3">' + data.errors.txt_nome + " ⬆</div>"
                    );
                }

                if (data.errors.txt_email) {
                    $("#email-group").addClass("has-error");
                    $("#email-group").append(
                        '<div class="help-block input-group mb-3">' + data.errors.txt_email + " ⬆</div>"
                    );
                }

                if (data.errors.txt_mensagem) {
                    $("#mensagem-group").addClass("has-error");
                    $("#mensagem-group").append(
                        '<div class="help-block input-group mb-3">' + data.errors.txt_mensagem + " ⬆</div>"
                    );
                }

                if (data.statusText != "OK") {
                    $("form").html(
                        '<div class="alert alert-danger">Não foi possível conectar-se ao servidor, Por favor, tente novamente mais tarde.</div>'
                    );
                }
            } else {
                $("form").html(
                    '<div class="alert alert-success">' + data.message + "</div>"
                );
            }
        })
        .fail(function (data) {
            if (!data.success && data.errors) {
                if (data.errors.txt_nome) {
                    $("#nome-group").addClass("has-error");
                    $("#nome-group").append(
                        '<div class="help-block input-group mb-3">' + data.errors.txt_nome + " ⬆</div>"
                    );
                }
        
                if (data.errors.txt_email) {
                    $("#email-group").addClass("has-error");
                    $("#email-group").append(
                        '<div class="help-block input-group mb-3">' + data.errors.txt_email + " ⬆</div>"
                    );
                }
        
                if (data.errors.txt_mensagem) {
                    $("#mensagem-group").addClass("has-error");
                    $("#mensagem-group").append(
                        '<div class="help-block input-group mb-3">' + data.errors.txt_mensagem + " ⬆</div>"
                    );
                }
        
                if (data.statusText != "OK") {
                    $("form").html(
                        '<div class="alert alert-danger">Não foi possível conectar-se ao servidor, Por favor, tente novamente mais tarde.</div>'
                    );
                }
            } else {
                $("form").html(
                    '<div class="alert alert-success">Mensagem enviada com sucesso</div>'
                );
            }
        });

        event.preventDefault();
    });
});