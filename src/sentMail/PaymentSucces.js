const paymntSlip = (
  amount,
  amounforitems,
  deliveredName,
  SenderName,
  itemname,
  date
) => {
  return `<!--
   * This email was built using Tabular.
   * For more information, visit https://tabular.email
   -->
   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
   <head>
   <title></title>
   <meta charset="UTF-8" />
   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
   <!--[if !mso]><!-->
   <meta http-equiv="X-UA-Compatible" content="IE=edge" />
   <!--<![endif]-->
   <meta name="x-apple-disable-message-reformatting" content="" />
   <meta content="target-densitydpi=device-dpi" name="viewport" />
   <meta content="true" name="HandheldFriendly" />
   <meta content="width=device-width" name="viewport" />
   <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
   <style type="text/css">
   table {
   border-collapse: separate;
   table-layout: fixed;
   mso-table-lspace: 0pt;
   mso-table-rspace: 0pt
   }
   table td {
   border-collapse: collapse
   }
   .ExternalClass {
   width: 100%
   }
   .ExternalClass,
   .ExternalClass p,
   .ExternalClass span,
   .ExternalClass font,
   .ExternalClass td,
   .ExternalClass div {
   line-height: 100%
   }
   body, a, li, p, h1, h2, h3 {
   -ms-text-size-adjust: 100%;
   -webkit-text-size-adjust: 100%;
   }
   html {
   -webkit-text-size-adjust: none !important
   }
   body, #innerTable {
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale
   }
   #innerTable img+div {
   display: none;
   display: none !important
   }
   img {
   Margin: 0;
   padding: 0;
   -ms-interpolation-mode: bicubic
   }
   h1, h2, h3, p, a {
   line-height: 1;
   overflow-wrap: normal;
   white-space: normal;
   word-break: break-word
   }
   a {
   text-decoration: none
   }
   h1, h2, h3, p {
   min-width: 100%!important;
   width: 100%!important;
   max-width: 100%!important;
   display: inline-block!important;
   border: 0;
   padding: 0;
   margin: 0
   }
   a[x-apple-data-detectors] {
   color: inherit !important;
   text-decoration: none !important;
   font-size: inherit !important;
   font-family: inherit !important;
   font-weight: inherit !important;
   line-height: inherit !important
   }
   a[href^="mailto"],
   a[href^="tel"],
   a[href^="sms"] {
   color: inherit;
   text-decoration: none
   }
   img,p{margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}h1{margin:0;Margin:0;font-family:Roboto,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:34px;font-weight:400;font-style:normal;font-size:28px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}h2{margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:30px;font-weight:400;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}h3{margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:26px;font-weight:400;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}
   </style>
   <style type="text/css">
   @media (min-width: 481px) {
   .hd { display: none!important }
   }
   </style>
   <style type="text/css">
   @media (max-width: 480px) {
   .hm { display: none!important }
   }
   </style>
   <style type="text/css">
   [style*="Albert Sans"] {font-family: 'Albert Sans', BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif !important;} [style*="Inter Tight"] {font-family: 'Inter Tight', BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif !important;}
   @media only screen and (min-width: 481px) {img,p{margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}h1{margin:0;Margin:0;font-family:Roboto,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:34px;font-weight:400;font-style:normal;font-size:28px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}h2{margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:30px;font-weight:400;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}h3{margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:26px;font-weight:400;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}.t3,.t4{mso-line-height-alt:60px!important;line-height:60px!important;display:block!important}.t9{border-radius:8px!important;overflow:hidden!important;padding:60px!important}.t11{padding:60px!important;border-radius:8px!important;overflow:hidden!important;width:480px!important}.t25{width:600px!important}.t31{color:#333!important}.t35{width:600px!important}.t45,.t50,.t53{background-color:#000!important}.t57,.t67{width:600px!important}.t73{font-size:32px!important}.t77{width:600px!important}.t97{width:483px!important}.t132{color:#333!important}.t138,.t146{max-width:600px!important}}
   </style>
   <style type="text/css" media="screen and (min-width:481px)">.moz-text-html img,.moz-text-html p{margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}.moz-text-html h1{margin:0;Margin:0;font-family:Roboto,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:34px;font-weight:400;font-style:normal;font-size:28px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}.moz-text-html h2{margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:30px;font-weight:400;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}.moz-text-html h3{margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:26px;font-weight:400;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}.moz-text-html .t3,.moz-text-html .t4{mso-line-height-alt:60px!important;line-height:60px!important;display:block!important}.moz-text-html .t9{border-radius:8px!important;overflow:hidden!important;padding:60px!important}.moz-text-html .t11{padding:60px!important;border-radius:8px!important;overflow:hidden!important;width:480px!important}.moz-text-html .t25{width:600px!important}.moz-text-html .t31{color:#333!important}.moz-text-html .t35{width:600px!important}.moz-text-html .t45,.moz-text-html .t50,.moz-text-html .t53{background-color:#000!important}.moz-text-html .t57,.moz-text-html .t67{width:600px!important}.moz-text-html .t73{font-size:32px!important}.moz-text-html .t77{width:600px!important}.moz-text-html .t97{width:483px!important}.moz-text-html .t132{color:#333!important}.moz-text-html .t138,.moz-text-html .t146{max-width:600px!important}</style>
   <!--[if !mso]><!-->
   <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;800&amp;family=Inter+Tight:wght@900&amp;display=swap" rel="stylesheet" type="text/css" />
   <!--<![endif]-->
   <!--[if mso]>
   <style type="text/css">
   img,p{margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}h1{margin:0;Margin:0;font-family:Roboto,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:34px;font-weight:400;font-style:normal;font-size:28px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}h2{margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:30px;font-weight:400;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}h3{margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:26px;font-weight:400;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}div.t3,div.t4{mso-line-height-alt:60px !important;line-height:60px !important;display:block !important}td.t9{border-radius:8px !important;overflow:hidden !important;padding:60px !important}td.t11{padding:60px !important;border-radius:8px !important;overflow:hidden !important;width:600px !important}td.t25{width:600px !important}h1.t31{color:#333 !important}td.t35{width:600px !important}td.t45,td.t50,td.t53{background-color:#000 !important}td.t57,td.t67{width:600px !important}h2.t73{font-size:32px !important}td.t77{width:600px !important}td.t97{width:513px !important}p.t132{color:#333 !important}td.t136{width:600px !important}div.t138,div.t146{max-width:600px !important}td.t151{width:600px !important}
   </style>
   <![endif]-->
   <!--[if mso]>
   <xml>
   <o:OfficeDocumentSettings>
   <o:AllowPNG/>
   <o:PixelsPerInch>96</o:PixelsPerInch>
   </o:OfficeDocumentSettings>
   </xml>
   <![endif]-->
   </head>
   <body class="t0" style="min-width:100%;Margin:0px;padding:0px;background-color:#F4F4F4;"><div class="t1" style="background-color:#F4F4F4;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t2" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#F4F4F4;" valign="top" align="center">
   <!--[if mso]>
   <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
   <v:fill color="#F4F4F4"/>
   </v:background>
   <![endif]-->
   <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td><div class="t3" style="mso-line-height-rule:exactly;font-size:1px;display:none;">&nbsp;</div></td></tr><tr><td>
   <table class="t10" role="presentation" cellpadding="0" cellspacing="0" align="center"><tr>
   <!--[if !mso]><!--><td class="t11" style="background-color:#FFFFFF;width:400px;padding:40px 40px 40px 40px;">
   <!--<![endif]-->
   <!--[if mso]><td class="t11" style="background-color:#FFFFFF;width:480px;padding:40px 40px 40px 40px;"><![endif]-->
   <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td>
   <table class="t14" role="presentation" cellpadding="0" cellspacing="0" align="left"><tr>
   <!--[if !mso]><!--><td class="t15" style="width:65px;padding:0 15px 0 0;">
   <!--<![endif]-->
   <!--[if mso]><td class="t15" style="width:80px;padding:0 15px 0 0;"><![endif]-->
   <div style="font-size:0px;"><img class="t21" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="65" height="70.40625" alt="" src="https://b1221904-60f0-4063-920b-1e99eb104bdd.b-cdn.net/e/88ae97c1-5811-4546-a3d2-2a0d571c364e/c02fda7a-b939-490d-b452-bf240bf75ce0.png"/></div></td>
   </tr></table>
   </td></tr><tr><td><div class="t13" style="mso-line-height-rule:exactly;mso-line-height-alt:42px;line-height:42px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td><div class="t22" style="mso-line-height-rule:exactly;mso-line-height-alt:2px;line-height:2px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
   <table class="t24" role="presentation" cellpadding="0" cellspacing="0" align="left"><tr>
   <!--[if !mso]><!--><td class="t25" style="width:480px;">
   <!--<![endif]-->
   <!--[if mso]><td class="t25" style="width:480px;"><![endif]-->
   <h1 class="t31" style="margin:0;Margin:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:41px;font-weight:800;font-style:normal;font-size:39px;text-decoration:none;text-transform:none;letter-spacing:-1.56px;direction:ltr;color:#000000;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">payment <span class="t162" style="margin:0;Margin:0;mso-line-height-rule:exactly;">Succesful</span></h1></td>
   </tr></table>
   </td></tr><tr><td><div class="t23" style="mso-line-height-rule:exactly;mso-line-height-alt:16px;line-height:16px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td><div class="t32" style="mso-line-height-rule:exactly;mso-line-height-alt:2px;line-height:2px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
   <table class="t34" role="presentation" cellpadding="0" cellspacing="0" align="left"><tr>
   <!--[if !mso]><!--><td class="t35" style="width:480px;">
   <!--<![endif]-->
   <!--[if mso]><td class="t35" style="width:480px;"><![endif]-->
   <p class="t41" style="margin:0;Margin:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:21px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;letter-spacing:-0.64px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Invoice from sportzi</p></td>
   </tr></table>
   </td></tr><tr><td><div class="t64" style="mso-line-height-rule:exactly;mso-line-height-alt:2px;line-height:2px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
   <table class="t66" role="presentation" cellpadding="0" cellspacing="0" align="left"><tr>
   <!--[if !mso]><!--><td class="t67" style="width:280px;">
   <!--<![endif]-->
   <!--[if mso]><td class="t67" style="width:280px;"><![endif]-->
   <h2 class="t73" style="margin:0;Margin:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:43px;font-weight:400;font-style:normal;font-size:33px;text-decoration:none;text-transform:none;letter-spacing:-0.64px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">${amount} </h2></td>
   </tr></table>
   </td></tr><tr><td><div class="t54" style="mso-line-height-rule:exactly;mso-line-height-alt:2px;line-height:2px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
   <table class="t56" role="presentation" cellpadding="0" cellspacing="0" align="left"><tr>
   <!--[if !mso]><!--><td class="t57" style="width:480px;">
   <!--<![endif]-->
   <!--[if mso]><td class="t57" style="width:480px;"><![endif]-->
   <p class="t63" style="margin:0;Margin:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:21px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;letter-spacing:-0.64px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">${date}</p></td>
   </tr></table>
   </td></tr><tr><td><div class="t74" style="mso-line-height-rule:exactly;mso-line-height-alt:2px;line-height:2px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
   <table class="t76" role="presentation" cellpadding="0" cellspacing="0" align="left"><tr>
   <!--[if !mso]><!--><td class="t77" style="width:480px;">
   <!--<![endif]-->
   <!--[if mso]><td class="t77" style="width:480px;"><![endif]-->
   <p class="t83" style="margin:0;Margin:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:21px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;letter-spacing:-0.64px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">To:${deliveredName}</p></td>
   </tr></table>
   </td></tr><tr><td><div class="t84" style="mso-line-height-rule:exactly;mso-line-height-alt:2px;line-height:2px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
   <table class="t86" role="presentation" cellpadding="0" cellspacing="0" align="left"><tr>
   <!--[if !mso]><!--><td class="t87" style="width:151px;">
   <!--<![endif]-->
   <!--[if mso]><td class="t87" style="width:151px;"><![endif]-->
   <p class="t93" style="margin:0;Margin:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:21px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;letter-spacing:-0.64px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">from:${SenderName}</p></td>
   </tr></table>
   </td></tr><tr><td><div class="t94" style="mso-line-height-rule:exactly;mso-line-height-alt:2px;line-height:2px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
   <table class="t96" role="presentation" cellpadding="0" cellspacing="0" align="center"><tr>
   <!--[if !mso]><!--><td class="t97" style="width:450px;padding:14px 15px 20px 15px;">
   <!--<![endif]-->
   <!--[if mso]><td class="t97" style="width:480px;padding:14px 15px 20px 15px;"><![endif]-->
   <div class="t103" style="display:inline-table;width:100%;text-align:left;vertical-align:top;">
   <!--[if mso]>
   <table role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top" width="450"><tr><td class="t108" style="width:5px;" width="5"></td><td width="215" valign="top"><![endif]-->
   <div class="t109" style="display:inline-table;text-align:initial;vertical-align:inherit;width:50%;max-width:310px;"><div class="t110" style="padding:0 5px 0 5px;">
   <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t111"><tr>
   <td class="t112"><div class="t113" style="display:inline-table;width:100%;text-align:left;vertical-align:top;">
   <!--[if mso]>
   <table role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top" width="215"><tr><td width="215" valign="top"><![endif]-->
   <div class="t138" style="display:inline-table;text-align:initial;vertical-align:inherit;width:100%;max-width:480px;">
   <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t140"><tr>
   <td class="t141"><div class="t142" style="display:inline-table;width:100%;text-align:left;vertical-align:top;">
   <!--[if mso]>
   <table role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top" width="215"><tr><td width="215" valign="top"><![endif]-->
   <div class="t146" style="display:inline-table;text-align:initial;vertical-align:inherit;width:100%;max-width:480px;">
   <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t148"><tr>
   <td class="t149"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td>
   <table class="t154" role="presentation" cellpadding="0" cellspacing="0" align="left"><tr>
   <!--[if !mso]><!--><td class="t155" style="width:208px;">
   <!--<![endif]-->
   <!--[if mso]><td class="t155" style="width:208px;"><![endif]-->
   <p class="t161" style="margin:0;Margin:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:46px;font-weight:500;font-style:normal;font-size:19px;text-decoration:none;text-transform:none;letter-spacing:-0.64px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:8px;">${itemname} </p></td>
   </tr></table>
   </td></tr></table></td>
   </tr></table>
   </div>
   <!--[if mso]>
   </td>
   </tr></table>
   <![endif]-->
   </div></td>
   </tr></table>
   </div>
   <!--[if mso]>
   </td>
   </tr></table>
   <![endif]-->
   </div></td>
   </tr></table>
   </div></div>
   <!--[if mso]>
   </td><td class="t108" style="width:5px;" width="5"></td><td class="t116" style="width:5px;" width="5"></td><td width="215" valign="top"><![endif]-->
   <div class="t117" style="display:inline-table;text-align:initial;vertical-align:inherit;width:50%;max-width:310px;"><div class="t118" style="padding:0 5px 0 5px;">
   <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t119"><tr>
   <td class="t120"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td>
   <table class="t125" role="presentation" cellpadding="0" cellspacing="0" align="right"><tr>
   <!--[if !mso]><!--><td class="t126" style="width:151px;">
   <!--<![endif]-->
   <!--[if mso]><td class="t126" style="width:151px;"><![endif]-->
   <p class="t132" style="margin:0;Margin:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:46px;font-weight:500;font-style:normal;font-size:19px;text-decoration:none;text-transform:none;letter-spacing:-0.64px;direction:ltr;color:#0E458E;text-align:left;mso-line-height-rule:exactly;mso-text-raise:8px;">${amounforitems} </p></td>
   </tr></table>
   </td></tr></table></td>
   </tr></table>
   </div></div>
   <!--[if mso]>
   </td><td class="t116" style="width:5px;" width="5"></td>
   </tr></table>
   <![endif]-->
   </div></td>
   </tr></table>
   </td></tr><tr><td><div class="t42" style="mso-line-height-rule:exactly;mso-line-height-alt:2px;line-height:2px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
   <table class="t44" role="presentation" cellpadding="0" cellspacing="0" align="center"><tr>
   <!--[if !mso]><!--><td class="t45" style="background-color:#5283CC;overflow:hidden;width:471px;text-align:center;line-height:34px;mso-line-height-rule:exactly;mso-text-raise:6px;border-radius:40px 40px 40px 40px;">
   <!--<![endif]-->
   <!--[if mso]><td class="t45" style="background-color:#5283CC;overflow:hidden;width:471px;text-align:center;line-height:34px;mso-line-height-rule:exactly;mso-text-raise:6px;border-radius:40px 40px 40px 40px;"><![endif]-->
   <span class="t51" style="display:block;margin:0;Margin:0;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Inter Tight';line-height:34px;font-weight:900;font-style:normal;font-size:13px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#FFFFFF;text-align:center;mso-line-height-rule:exactly;mso-text-raise:6px;">Download payment Slip</span></td>
   </tr></table>
   </td></tr></table></td>
   </tr></table>
   </td></tr><tr><td><div class="t4" style="mso-line-height-rule:exactly;font-size:1px;display:none;">&nbsp;</div></td></tr></table></td></tr></table></div></body>
   </html>
   `;
};

module.exports = { paymntSlip };
