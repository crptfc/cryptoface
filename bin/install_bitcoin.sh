#!/bin/bash

# Setup a bitcoin full node on Centos 7
function install_bitcoin() {
  # Update dependency
  yum update -y
  yum -y install epel-release
  yum install -y autoconf automake boost-devel gcc-c++ git libdb4-cxx libdb4-cxx-devel libevent-devel libtool openssl-devel wget

  # Clone bitcoin source code
  git clone https://github.com/bitcoin/bitcoin.git
  cd bitcoin

  # checkout to a release
  release_tag="v0.19.0.1"
  echo checking out "${release_tag}"
  git checkout "${release_tag}"

  # Build
  ./autogen.sh
  ./configure
  make -j $(nproc)

  echo 'You can add ./src to PATH to access bitcoin-cli and bitcoind'
}

install_bitcoin
