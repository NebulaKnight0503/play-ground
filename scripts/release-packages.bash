#!/usr/bin/env bash

OTP=123456
TAG=latest

npm publish dist/packages/core --tag "${TAG}" --otp "${OTP}"
npm publish dist/packages/modal-ui-js --tag "${TAG}" --otp "${OTP}"
npm publish dist/packages/wallet-utils --tag "${TAG}" --otp "${OTP}"
npm publish dist/packages/my-near-wallet --tag "${TAG}" --otp "${OTP}"
