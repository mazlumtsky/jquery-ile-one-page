$(function (){
    target
    var autoComplete=[
       "fsfdg",
       "fgfgf",
       "aa",
       "bbb",
       "osman",
       "mazlum",
       "html",
       "bcc",
       "bcc",
       "bcc",
       "sss",
    ];
    $("#mazlum").autoComplete({
        source:autoComplete
    });
});



$(function (){
    $("#btn-giris").click(function(){
     $("#myUye").modal();
    });
});

$(function (){
    $("#btnsubmit").click(function(){
        var email,phone,password;
        email=$("#user-email").val();
        email=jQuery.trim(email);
        phone=$("#user-phone").val();
        phone=$.trim(phone);
        password=$("#user-password").val();
        password=password.trim(password);
        if(email==""){
           $("#validation-email").html("Email alanı boş geçilmez");
        }
        if(phone==""){
            $("#validation-phone").html("Telefon alanı boş geçilmez");
  
         }
         if(password==""){
            $("#validation-password").html("Şifre alanı boş geçilmez");
         }
        
    });
});


$(function (){
    $("#btn-üyeol").click(function(){
     $("#byUye").modal();
    });
});

$(function(){
$("#btn-submit").click(function(){
    var ad,soyad,tc,email,phone,password;
    ad=$("#user-ad").val();
    soyad=$("#user-soyad").val();
    tc=$("#user-tc").val();
    email=$("#user-email").val();
    phone=$("#user-phone").val();
    password=$("#user-password").val();
    password=$("#user-password").val();
    
    if(email==""){
        $("#vali-ad").html("İsmi boş geçilemez");
        $("#vali-soyad").html("Soyad boş geçilemez");
        $("#vali-tc").html("T.C. alanı boş geçilemez");
        $("#vali-email").html("Email alanı boş geçilemez");
        $("#vali-phone").html("Telefon alanı boş geçilemez");
        $("#vali-password").html("Şifre alanı boş geçilemez");
        $("#vali-passwordd").html("Şifre tekrar");
     }
});
});