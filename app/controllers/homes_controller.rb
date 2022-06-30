class HomesController < ApplicationController
  def top
    puts "top"
    if params[:onlySpeed]
      puts "onlySpeed"

    end
  end

  def main 
    print "main"

    @articles = orderUser

    speeds = []
    @articles.each do |spd|
      print(spd.speed, "\n")
      speeds.push(spd.speed)
    end

    print speeds
    @js_speeds_json = speeds.to_json.html_safe

  end
  def result

  end
  def view
    @articles = orderUser
  end

  private
  def orderUser
    User.all.order(:speed)
  end
end
