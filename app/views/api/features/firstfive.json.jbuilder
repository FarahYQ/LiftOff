json.array! @camps do |camp|
  json.main_photo_url camp.main_photo_url
  json.extract! camp, :id, :title, :short_description
end
