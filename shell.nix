with import <nixpkgs> {};

stdenv.mkDerivation {
  name = "keycircle";
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
