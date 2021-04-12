class CreateMealsTable < ActiveRecord::Migration[6.1]
  def change
    create_table :meals do |t|
      t.string :name
      t.string :picture
      t.string :area
      t.string :category
      t.string :video
      t.integer :user_id

      t.timestamps
    end
  end
end
