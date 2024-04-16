
## Pokemon Next

Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The project contains three views.

## List Pokemon Types

This is first and default view. It fetches and displays 20 Pokemon Types / Categories. We could implement the pagination to show more, but that was out of scope for this project. 

This screen also provides a dropdown list of Pokemons. When user selects a Pokemon from the dropdown list, The types will be filtered to show only to which that Pokemon belongs to. 

Each Pokemon Type is clickable and User can click to list all the Pokemons of that type.

Screenshot for Pokemon Types view.

## List Pokemons by Pokemon Type

This view shows all the Pokemons having selected type. User can navigate to this by clicking link from Pokemon Types view. 

This view also have a search functionality to search Pokemons by name. 

Screenshot for Pokemons by type.

## Pokemon Details

This view displays some details about a selected Pokemon from the Pokemon List. It also displays a bar chart displaying the stats for a pokemon. (It uses React-Charts library)

Screenshot for Pokemon Details
