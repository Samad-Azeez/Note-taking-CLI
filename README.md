# Note-Taking CLI App

This is a simple command-line interface (CLI) application for managing notes. You can create, list, find, remove, and clean notes directly from your terminal.

## Features

- Create a new note with optional tags
- List all notes
- Find notes by a search term
- Remove a note by its ID
- Remove all notes

## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/yourusername/note-taking-cli.git
    ```

2. **Navigate to the project directory:**

    ```sh
    cd note-taking-cli
    ```

3. **Install the dependencies:**

    ```sh
    npm install
    ```

## Usage

### Create a New Note

To create a new note, use the `new` command followed by the content of the note. Optionally, you can add tags using the `-t` or `--tags` option.

```sh
note new "This is my note" -t "tag1,tag2"
```

### List All Notes

To list all notes, use the `all` command:

```sh
note all
```

### Find Notes

To find notes by a search term, use the `find` command followed by the search term:

```sh
note find "search term"
```

### Remove a Note

To remove a note by its ID, use the `remove` command followed by the ID of the note:

```sh
note remove 1234567890
```

### Remove All Notes

To remove all notes, use the `clean` command:

```sh
note clean
```

## Development

### Project Structure

- **index.js**: The entry point for the CLI application.
- **src/command.js**: Handles command definitions and parsing.
- **src/db.js**: Handles reading from and writing to the database (a JSON file).
- **src/notes.js**: Contains the core functions for managing notes (create, read, update, delete).

### Adding New Commands

To add new commands, edit the `src/command.js` file. Follow the existing structure to define new commands, options, and handlers.

### Debugging

If you encounter issues, make sure to check the following:

- The `db.json` file should exist in the root directory. If it doesn't, create an empty JSON file named `db.json` with the following content:

    ```json
    {
      "notes": []
    }
    ```

- Ensure you are using the correct Node.js version specified in the `package.json` file.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## Acknowledgements

This project uses the following libraries:

- [yargs](https://github.com/yargs/yargs): For command-line argument parsing.
