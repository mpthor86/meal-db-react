class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :has_secure_password
      t.timestamps
    end
  end
end
