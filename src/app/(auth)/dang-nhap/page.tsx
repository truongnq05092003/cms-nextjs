"use client";

import * as React from "react";
import { useState } from "react";

import { SETTINGS } from "@/utils/settings";

import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { isEmail, isNullOrEmpty } from "@/utils/validate";

export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [emailErr, setEmailErr] = useState("");
	const [password, setPassword] = useState("");
	const [passwordErr, setPasswordErr] = useState("");

	const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
		setEmailErr("");
	};

	const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
		setPasswordErr("");
	};

	const val = () => {
		let hasErr = false;

		if (isNullOrEmpty(email) || isNullOrEmpty(email.trim())) {
			hasErr = true;
			setEmailErr(SETTINGS.AUTH.ERR_EMAIL_REQUIRED);
		} else if (!isEmail(email)) {
			hasErr = true;
			setEmailErr(SETTINGS.AUTH.ERR_EMAIL_VALID);
		}

		if (isNullOrEmpty(password) || isNullOrEmpty(password.trim())) {
			hasErr = true;
			setPasswordErr(SETTINGS.AUTH.ERR_PASSWORD_REQUIRED);
		} else if ((password.trim() || []).length < 7) {
			hasErr = true;
			setPasswordErr(SETTINGS.AUTH.ERR_PASSWORD_LIMIT_6);
		}

		return hasErr;
	};

	const handleSubmit = () => {
		if (val()) return;

		const payload = {
			email,
			password,
		};

		console.log(payload);
	};

	return (
		<form className="px-6 py-8 rounded-[20px] w-[380px] max-w-full bg-[#262630]">
			<div className="relative">
				<Input
					value={email}
					onChange={handleChangeEmail}
					id="email"
					name="email"
					type="email"
					placeholder=""
					autoComplete="off"
					aria-describedby="outlined_error_help"
					className="peer pt-3 pb-0 h-[54px] text-sm text-white bg-[#363648] focus-visible:ring-0 rounded-lg border-none outline-none placeholder:text-sm placeholder:text-[#828295]"
				/>
				<label
					htmlFor="email"
					className="absolute text-sm text-[#828295] duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
				>
					{SETTINGS.AUTH.LABEL_EMAIL}
				</label>

				{emailErr && (
					<p
						id="outlined_error_help"
						className="mt-2 text-xs text-red-600 dark:text-red-400"
					>
						<span className="font-medium">{emailErr}</span>
					</p>
				)}
			</div>

			<div className="relative mt-4">
				<Input
					value={password}
					onChange={handleChangePassword}
					id="password"
					name="password"
					type="password"
					placeholder=""
					autoComplete="off"
					className="peer pt-3 pb-0 h-[54px] text-sm text-white bg-[#363648] focus-visible:ring-0 rounded-lg border-none outline-none placeholder:text-sm placeholder:text-[#828295]"
				/>
				<label
					htmlFor="password"
					className="absolute text-sm text-[#828295] duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
				>
					{SETTINGS.AUTH.LABEL_PASSWORD}
				</label>
				{passwordErr && (
					<p
						id="outlined_error_help"
						className="mt-2 text-xs text-red-600 dark:text-red-400"
					>
						<span className="font-medium">{passwordErr}</span>
					</p>
				)}
			</div>

			<div className="mt-8 w-full flex justify-center">
				<Button
					type="button"
					className="px-10 h-11 rounded-full bg-white text-[#000000] hover:bg-white"
					onClick={handleSubmit}
				>
					{SETTINGS.GENERAL.LOGIN}
				</Button>
			</div>
		</form>
	);
}
