with import <nixpkgs> {};

stdenv.mkDerivation {
  name = "quipu";
  buildInputs = [
    nodejs
    python
    yarn
    nodePackages.tern
  ];
  shellHook = ''
    export PATH="$PWD/node_modules/.bin/:$PATH"
  '';
}
