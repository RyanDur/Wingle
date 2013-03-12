class Card < ActiveRecord::Base
  attr_accessible :body, :description, :title
end
