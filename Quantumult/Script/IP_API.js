if ($response.statusCode != 200) {
    $done(null);
  }
  
  var body = $response.body;
  var obj = JSON.parse(body);
  var title = obj['country'];
  var subtitle = obj['as'];
  var ip = obj['query'];
  var description = obj['country'] + ' - ' + obj['city'] + '\n' + "ISP: " + obj['isp'] + '\n' + "AS: " + obj['as'] + '\n' + obj['query'];
  
  $done({title, subtitle, ip, description});
