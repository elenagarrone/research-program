class HomepageController < ApplicationController
  def index
    @codes = ['en', 'it', 'de']
    @names = ['English', 'Italian', 'German']
    @languages = @codes.zip @names
    @nationality = I18n.locale
    @img_flag = @nationality.to_s + '.png'
  end
end
