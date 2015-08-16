class HomepageController < ApplicationController
  def index
    @nationality = I18n.locale
    @img_flag = @nationality.to_s + '.png'
  end
end
