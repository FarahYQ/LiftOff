# format: {1: {id: 1, username: "farah"}}
json.set! user.id do
  json.extract! user, :id, :username, :email
end
