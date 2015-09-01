class ExpoMailer < Spree::BaseMailer
  default from: "me@torries.ru"

              #Spree::Store.current.mail_from_address

  def zamer_email(name, phone)
    @name = name
    @phone = phone
#Spree::Store.current.mail_from_address
    mail(to: "salatcesar@gmail.com", subject: 'Заказ с интернет-магазина на выезд замерщика')

  end

end