class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable,
         :recoverable, :rememberable, :trackable, :validatable

  belongs_to :level
  belongs_to :position

  validates :confirmed_at,  :presence => true
  validates :email, :presence => true

  include DeviseTokenAuth::Concerns::User
end
