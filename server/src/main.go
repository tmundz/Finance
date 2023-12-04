package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
)

type expense struct {
	ID        int    `json:"id"`
	Category  string `json: "category"`
	Title     string `json: "title"`
	Essential int    `json: "essential"`
	cost      int    `json: "cost"`
}

func main() {

	app := fiber.New()
	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("hey")
	})
	log.Fatal(app.Listen(":3030"))

}
