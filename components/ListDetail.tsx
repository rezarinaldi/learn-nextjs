import * as React from "react";
import Link from "next/link";

import { User } from "../interfaces";

type ListDetailProps = {
  item: User;
};

const ListDetail = ({ item: user }: ListDetailProps) => (
  <div>
    <h1>Detail for {user.name}</h1>
    <p>ID: {user.id}</p>
    <Link href="/users">
      <button
        type="button"
        className="py-2 px-4 mt-3 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
      >
        Back
      </button>
    </Link>
  </div>
);

export default ListDetail;
