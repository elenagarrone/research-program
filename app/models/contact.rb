class Contact < MailForm::Base
  attribute :title,     :validate => true
  attribute :email,     :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message,   :validate => true    

  def headers
    {
      :subject => %(#{title}),
      :to => ENV["EMAIL_RESEARCH"], 
      :from => %(<#{email}>)
    }
  end
end