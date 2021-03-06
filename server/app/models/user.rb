class User < ApplicationRecord
    has_secure_password
    has_many :meals

    validates :username, uniqueness: true, presence: true
    validates :password, presence: true
end