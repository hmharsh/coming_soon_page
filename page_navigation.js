const productUrlMap = [
    {name: "dry_fruit_cookie_pizza", id: "058e1a33-1397-4ca9-a2c0-3e5bf1416fed"},
    {name: "roasted_almond_cookie_pizza", id: "fe014ae2-cb6c-408f-ac29-ccbf855f79cd"},
    {name: "four_season_cookie_pizza", id: "69bdd387-ef1a-40fa-b76f-95d43d2729ae"},
    {name: "rose_pista_cookie_pizza", id: "6ee076af-fecb-48b4-8289-1cb3772a1501"},
    {name: "nutella_cookie_pizza", id: "b99a69a2-78ee-403a-a019-97524b9bda5f"},
    {name: "peanut_butter_cookie_pizza", id: "374e9f31-a2e8-4bba-b9ce-408a42e5182d"},
    {name: "suprise__cookie_pizza", id: "9906dcd8-9921-4db7-9824-e6288c99ea27"},
    {name: "roky_road_cookie_pizza", id: "c9a5e69b-2f23-4c15-a80e-85cac827edce"},
    {name: "rasmalai_cookie_pizza", id: "8bfb1292-6777-49f9-88c2-ecd95e2d5f04"},
    {name: "healthy_nuts_cookie_pizza", id: "818c1a7a-24cc-4bed-8bdf-ffd0b50ae039"},
    {name: "pista_cookie_pizza", id: "22b47efd-96f2-417a-9d90-e1bbe8a9c7f5"},
    {name: "butter_bite_cookies", id: "6f10e6ff-69a2-470c-8510-8f2c25ad73bd"},
    {name: "pinewheel_swirl", id: "0818a1a1-bdb2-4b85-95a9-fe69dee1ed70"},
    {name: "jam_filled_cookies", id: "f27134e1-29eb-48b2-9de7-ff71eff985e4"},
    {name: "pista_brookie", id: "e3acd965-b899-4400-86c4-281fbbd43f17"},
    {name: "malai_biscuits", id: "c1565115-8c20-4f6f-a321-9669d493a92f"},
    {name: "nutella_filled_cookies", id: "4040f493-de3e-4992-9454-e152195addb9"},
    {name: "tutti_frutti_cookies", id: "4365798d-4db4-4dc3-a267-75a8f5b40b30"},
    {name: "almond_rabadi_center_filled", id: "3e1fa37a-eda7-43ea-8f3f-0d705163fa79"},
    {name: "set_your_message_on_chocolate", id: "33b81d3c-3b54-4e7c-8e6b-35cb366cd44c"},
    {name: "basic_chocolate_bar", id: "6801a7cf-ac74-4516-a9c4-4f8e9408d8d8"},
    {name: "almond_rocher", id: "8e70819d-9e01-43d7-b5f3-f6bd41519c71"},
    {name: "alcoholic_box", id: "e4606c32-d58b-403a-b97a-7781d1e3bb9e"},
    {name: "assorted_mini_bars", id: "74291140-5c2b-4bc9-ab63-151755cf1aa0"},
    {name: "cool_and_spicy_hearts", id: "ded8b596-2deb-4895-a2c1-29abb6609b61"},
    {name: "premium_chocolate_bar", id: "1a748048-8753-4525-8549-922ace907989"},
    {name: "peanut_crockpot_candy", id: "ea8ea6f7-ecb8-4ee8-b2b6-de36202d82d6"},
    {name: "printed_squares", id: "3b742756-f209-4efd-b7df-474c6cc07c7a"},
    {name: "giant_chocolate_bar", id: "fad80f77-8f02-4bd7-a9da-4bdb6591d4fd"},
    {name: "granola_bar", id: "e4f3f588-fd9f-4a33-b402-e86733844c7e"},
    {name: "salami_roll", id: "4f91c43b-4e8a-4112-a24a-6134285ae373"},
    {name: "chocolate_mandola", id: "1e994e55-cb65-4566-9cbc-9af84bc8b0f9"},
]

productUrlMap.forEach(function(item){
    if (window.location.href.endsWith(item.name)){
        window.location.href = "https://cakebyshivangi.mini.store/products/"+item.id;
    }
})