class AddNameAndAddressToFlat < ActiveRecord::Migration[6.1]
  def change
    add_column :flats, :name, :string
    add_column :flats, :address, :string
  end
end
