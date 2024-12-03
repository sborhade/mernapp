terraform {
required_providers {
azurerm = {
source = "hashicorp/azurerm"
version = "3.0.0"
}
}
}

provider "azurerm" {
features {}
skip_provider_registration = true

}

data "azurerm_resource_group" "rg" {
name = "<resource-group-name>"
}


resource "azurerm_storage_account" "storage" {
name = "mywhizstorageyourname"
resource_group_name = data.azurerm_resource_group.rg.name
location = data.azurerm_resource_group.rg.location
account_tier = "Standard"
account_replication_type = "LRS"
}
