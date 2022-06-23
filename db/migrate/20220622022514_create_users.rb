class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.text :name
      t.string :email
      t.string :password_digest
      t.integer :speed

      t.timestamps
    end
    add_index :users, :email, unique: true
  end
end
