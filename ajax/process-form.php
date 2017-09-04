<?php
    require_once 'vendor/autoload.php';
    header('Content-Type: application/json');

    $response = [
        'valid' => true,
        'success' => false,
        'errors' => []
    ];

    $fieldsMap = [
      'title'     => 'Модель',
      'color'     => 'Цвет',
      'price'     => 'Цена',
      'size'      => 'Размер',
      'userPhone' => 'Телефон',
      'userName'  => 'Имя',
    ];

    // Define form fields validation patterns
    $validation = [
      'title'     => '/.{2,}/',
      'color'     => '/.{2,}/',
      'price'     => '/^\d{2,}$/',
      'size'      => '/.{2,}/',
      'userPhone' => '/^(\+380|0)?[1-9]\d{8}$/',
      'userName'  => '/.*/',
    ];

    // Clear user form input data
    foreach ($_POST as $field => $value) {
      $_POST[$field] = strip_tags(trim(htmlspecialchars($value)));

      // Validate form fields (if validation pattern is set)
      if (in_array($field, array_keys($validation)) && !preg_match($validation[$field], $value)) {
        $response['errors'][] = $field;
        $response['valid'] = false;
      }
    }

    if ($response['valid']) {
        // Send notification email
        $mail = new PHPMailer();
        $mail->CharSet = 'UTF-8';

        // $mail->AddReplyTo(
        //     $config['email']['subscribe']['from'],
        //     $config['email']['subscribe']['subject']
        // );
        // $mail->SetFrom(
        //     $config['email']['subscribe']['from'],
        //     $config['email']['subscribe']['subject']
        // );
        $mail->AddAddress(
            'ego.cogitare@gmail.com',
            ucfirst($_POST['form'])
        );
        $formData = '';
        foreach ($fieldsMap as $f => $v) {
          if (isset($_POST[$f])) {
            $formData .= '<tr><td><b>' . $v . '</b></td><td>' . $_POST[$f] . '</td></tr>';
          }
        }
        $mail->Subject = 'Заявка с сайта "' . ucfirst($_POST['form']) . '"';
        $mail->MsgHTML('
            <html>
              <head>
                <title>Заказ на звонок</title>
              </head>
              <body>
                <table>
                  ' .$formData . '
                </table>
              </body>
            </html>
        ');
        $response['success'] = $mail->Send();
    }

    echo json_encode($response);
    die();
