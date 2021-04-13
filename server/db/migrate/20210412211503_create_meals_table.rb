class CreateMealsTable < ActiveRecord::Migration[6.1]
  def change
    create_table :meals do |t|
      t.string :strMeal
      t.string :strMealThumb
      t.string :strArea
      t.string :strCategory
      t.string :strYoutube
      t.integer :user_id

      t.timestamps
    end
  end
end
