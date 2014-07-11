require 'nokogiri'
require "open-uri"

RATING_BAR_CLASS = ".rating-histogram"
RATINGS_CLASSES  = {"5" => "five", "4" => "four", "3" => "three", "2" => "two", "1" => "one"}.freeze

if ARGV.length > 0
  gp_name = ARGV.first.chomp
  url = "https://play.google.com/store/apps/details?id=#{gp_name}"
  begin
    page = Nokogiri::HTML(open("https://play.google.com/store/apps/details?id=#{gp_name}"))
  rescue => e
    p e.message
    p "Please provide valid android app package name"
  end
    rating_bar = page.css(RATING_BAR_CLASS)
    RATINGS_CLASSES.each do |k,v|
      rating = rating_bar.css(".#{v} .bar-number").text
      p "#{k} stars: #{rating} ratings."
    end
else
  p "Please provide android app package name"
end


