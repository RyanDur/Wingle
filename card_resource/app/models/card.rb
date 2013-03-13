class Card < ActiveRecord::Base
  attr_accessible :body, :description, :title

  validates :title, presence: true, length: {maximum: 70}
  validates :description, length: {maximum: 140}
  default_scope order: 'cards.created_at DESC'
end
