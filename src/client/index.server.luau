local toolbar = plugin:CreateToolbar("StudioPresence")
local button = toolbar:CreateButton("Settings", "Settings", "")

button.Click:Connect(function()
	print("✅ Plugin is working!")
end)
