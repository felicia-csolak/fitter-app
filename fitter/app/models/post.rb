class Post < ApplicationRecord
  validates :content, presence: true
  belongs_to :user
  has_many :comments, dependent: :delete_all
end
