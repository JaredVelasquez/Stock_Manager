
CREATE VIEW dbo.VistaInventario
AS
  SELECT Product.name , Inventory.stock, Category.[description]  as 'Inventario'
  FROM dbo.Inventory
    JOIN dbo.Product on Product.id_product = Inventory.id_Inventory
    JOIN dbo.Category on Category.id_category = Product.id_category

GO

SELECT *
FROM dbo.VistaInventario
GO
