const products = [
  {
    "id": "bec7ab80-83a2-46f4-8cce-a95e652b2ae5",
    "name": "chicken",
    "category": "meat",
    "price": 107
  },
  {
    "id": "13be56c4-5a32-49b2-826a-c48586051e87",
    "name": "blackfin tuna",
    "category": "fish",
    "price": 725
  },
  {
    "id": "4752d68c-d5b0-411d-b588-3c09550ba597",
    "name": "aubergine",
    "category": "greens",
    "price": 277
  },
  {
    "id": "3da04294-5b6d-405e-bd57-cc6e04ff3f25",
    "name": "banana squash",
    "category": "greens",
    "price": 944
  },
  {
    "id": "01336fed-7f6f-4729-9c78-3aeedc6ee922",
    "name": "acorn squash",
    "category": "greens",
    "price": 549
  },
  {
    "id": "fdb91031-9245-4708-a2e8-420288547a56",
    "name": "reindeer",
    "category": "meat",
    "price": 920
  },
  {
    "id": "09350412-4c2b-4ad7-90a0-bfeb9ca9769a",
    "name": "asparagus",
    "category": "greens",
    "price": 167
  },
  {
    "id": "bc5f022b-63f3-4791-b9ff-9c502035ba9b",
    "name": "asparagus",
    "category": "greens",
    "price": 674
  },
  {
    "id": "b853892a-124f-42ef-a9b2-f46e3b8262d9",
    "name": "banana squash",
    "category": "greens",
    "price": 457
  },
  {
    "id": "5eba5100-1450-4770-8026-2ac2a2f46a80",
    "name": "sheep",
    "category": "meat",
    "price": 234
  },
  {
    "id": "1b0c24e5-9afc-4bfa-bd5e-51be533e8e31",
    "name": "amaranth",
    "category": "greens",
    "price": 400
  },
  {
    "id": "291ea465-7335-4d45-b89d-d31b1ce04271",
    "name": "banana squash",
    "category": "greens",
    "price": 818
  },
  {
    "id": "93747df9-adaa-45e4-aeb4-aa2b7948aba1",
    "name": "beef",
    "category": "meat",
    "price": 735
  },
  {
    "id": "7085de7f-8e11-4a15-98cc-feeb2c23db0a",
    "name": "reindeer",
    "category": "meat",
    "price": 631
  },
  {
    "id": "a96fba54-bc92-4db9-ace2-66eae04f38a4",
    "name": "chicken",
    "category": "meat",
    "price": 597
  },
  {
    "id": "5f36af2b-2a4c-4c0f-82b9-260264e4f163",
    "name": "chicken",
    "category": "meat",
    "price": 700
  },
  {
    "id": "7ac3c88d-ab40-43a9-ba56-1588fda96736",
    "name": "pulled pork",
    "category": "meat",
    "price": 561
  },
  {
    "id": "085f5c41-1f44-47dc-9862-e07401b9299c",
    "name": "artichoke",
    "category": "greens",
    "price": 185
  },
  {
    "id": "e0926d03-28ce-48c7-b256-1d79c5c855be",
    "name": "pulled pork",
    "category": "meat",
    "price": 444
  },
  {
    "id": "c455feba-e237-4960-84b2-e3635a7b115a",
    "name": "azuki bean",
    "category": "greens",
    "price": 625
  },
  {
    "id": "09e91ffc-6a04-4f41-a12e-4ffe0277629f",
    "name": "artichoke",
    "category": "greens",
    "price": 880
  },
  {
    "id": "31e40a54-6154-4798-999a-d23a92ca79ca",
    "name": "chicken",
    "category": "meat",
    "price": 766
  },
  {
    "id": "df92b0ba-27d6-4662-908f-162afd582148",
    "name": "acorn squash",
    "category": "greens",
    "price": 724
  },
  {
    "id": "f4ba53fe-9a64-45db-b382-8d3fe74ff878",
    "name": "aubergine",
    "category": "greens",
    "price": 724
  },
  {
    "id": "b21c55dc-9c6e-4aa5-bd24-33b3b5c3991c",
    "name": "veal",
    "category": "meat",
    "price": 409
  },
  {
    "id": "42fb5a78-e41a-4581-9d3b-937935725ae2",
    "name": "salmon",
    "category": "fish",
    "price": 63
  },
  {
    "id": "2be088b5-b286-45f4-b421-81cf9c597833",
    "name": "pork",
    "category": "meat",
    "price": 864
  },
  {
    "id": "22a24fae-777c-4132-af7f-002666f9d3af",
    "name": "anise",
    "category": "greens",
    "price": 298
  },
  {
    "id": "be6f88cf-96ca-4456-a4d5-934668771b72",
    "name": "goatling",
    "category": "meat",
    "price": 553
  },
  {
    "id": "56a00029-858b-4061-9e45-9ada7ed14f92",
    "name": "azuki bean",
    "category": "greens",
    "price": 53
  },
  {
    "id": "61d33bc2-f24a-4cd9-9ed7-dce40337ce59",
    "name": "alfalfa sprout",
    "category": "greens",
    "price": 327
  },
  {
    "id": "001d19b4-c6be-4f2a-a4ff-bef00cb4da80",
    "name": "pork",
    "category": "meat",
    "price": 718
  },
  {
    "id": "42c69ce9-744a-4b96-becb-1932e986c996",
    "name": "beardfish",
    "category": "fish",
    "price": 639
  },
  {
    "id": "265b484f-b5d7-4cb0-8a89-dcac3ae0cdc5",
    "name": "anise",
    "category": "greens",
    "price": 460
  },
  {
    "id": "38f38e26-0a91-4ace-9817-edef50a55c77",
    "name": "anise",
    "category": "greens",
    "price": 794
  },
  {
    "id": "ea4e32ab-77b2-4660-9912-c90bf9a3e425",
    "name": "candiru",
    "category": "fish",
    "price": 869
  },
  {
    "id": "4c891c1d-73e6-4875-8892-87a7557e9a69",
    "name": "alfalfa sprout",
    "category": "greens",
    "price": 928
  },
  {
    "id": "f1579152-9bba-47f7-bf35-daca0e3f357b",
    "name": "pork",
    "category": "meat",
    "price": 584
  },
  {
    "id": "7b664eb2-75d8-489f-8d14-f32a16644a9a",
    "name": "banana squash",
    "category": "greens",
    "price": 348
  },
  {
    "id": "391d08ea-b51a-49e2-a3a1-d9e8b0872082",
    "name": "amaranth",
    "category": "greens",
    "price": 127
  },
  {
    "id": "9cb6012a-f2bd-46ce-b680-e1c17bc5cb4f",
    "name": "reindeer",
    "category": "meat",
    "price": 617
  },
  {
    "id": "9c1ef154-a259-4252-aeef-37f877dc20e9",
    "name": "salmon",
    "category": "fish",
    "price": 297
  },
  {
    "id": "31e804fa-39c7-4f82-ba89-c8989e9a8121",
    "name": "pork",
    "category": "meat",
    "price": 161
  },
  {
    "id": "95dae7dd-a8b7-4362-abcc-2d7ecd5cb958",
    "name": "chub",
    "category": "fish",
    "price": 825
  },
  {
    "id": "479a54e8-d14f-4375-b71c-49bda99e99fb",
    "name": "artichoke",
    "category": "greens",
    "price": 810
  },
  {
    "id": "cd3290b4-d435-4c05-b83e-20be3986f8de",
    "name": "amaranth",
    "category": "greens",
    "price": 512
  },
  {
    "id": "f715571b-a447-4ee6-a0cf-d18459f71092",
    "name": "deer",
    "category": "meat",
    "price": 362
  },
  {
    "id": "1cc0d330-fe8d-4a01-bf71-6e919b315b03",
    "name": "piglet",
    "category": "meat",
    "price": 758
  },
  {
    "id": "a6d3362a-f7f3-438f-8f72-d4642b035b54",
    "name": "salmon",
    "category": "fish",
    "price": 536
  },
  {
    "id": "38a179cd-a8e7-40ad-964c-a55774efa1fb",
    "name": "oysters",
    "category": "fish",
    "price": 357
  },
  {
    "id": "d5d009f2-80dc-4229-a6c5-15a6a96751f3",
    "name": "piglet",
    "category": "meat",
    "price": 361
  },
  {
    "id": "a9cf7318-e091-4eda-9e9b-295170876960",
    "name": "azuki bean",
    "category": "greens",
    "price": 564
  },
  {
    "id": "b8bfd30d-1d1f-4f46-97b0-3a3ba8e21c2b",
    "name": "alfalfa sprout",
    "category": "greens",
    "price": 405
  },
  {
    "id": "7f7d05df-ff90-412b-8fa4-ed6a267e7217",
    "name": "artichoke",
    "category": "greens",
    "price": 902
  },
  {
    "id": "3660d91a-b8b4-4789-ab48-e0b60bef19b7",
    "name": "goatling",
    "category": "meat",
    "price": 449
  },
  {
    "id": "a018319f-197c-41ec-a1fd-a95608117af9",
    "name": "azuki bean",
    "category": "greens",
    "price": 578
  },
  {
    "id": "c4cde0f2-53ab-49d1-be5a-b8a73cd0fb7b",
    "name": "mackerel",
    "category": "fish",
    "price": 559
  },
  {
    "id": "d946c086-f013-431f-868d-26f47f85f83c",
    "name": "cod",
    "category": "fish",
    "price": 249
  },
  {
    "id": "fd4783da-ec1e-492c-a29d-e7800398efb7",
    "name": "azuki bean",
    "category": "greens",
    "price": 257
  },
  {
    "id": "4d502f3b-3844-4799-8c4e-96c370bc92d5",
    "name": "candiru",
    "category": "fish",
    "price": 870
  },
  {
    "id": "0c4a6b36-b248-4c56-84a1-ea2697f7929f",
    "name": "amaranth",
    "category": "greens",
    "price": 98
  },
  {
    "id": "a1755379-29ff-439b-bf64-c1d2dbd0055b",
    "name": "blackfin tuna",
    "category": "fish",
    "price": 520
  },
  {
    "id": "82f3aab2-7dae-48bd-8065-1b86d61352f2",
    "name": "pork",
    "category": "meat",
    "price": 803
  },
  {
    "id": "e5b1d13d-7fec-4b46-88fe-0939ac9ce0af",
    "name": "sheep",
    "category": "meat",
    "price": 931
  },
  {
    "id": "00e49f53-844a-4e8f-bff3-ec84a85c6714",
    "name": "pulled pork",
    "category": "meat",
    "price": 553
  },
  {
    "id": "5f6f9a4a-4618-4101-b68c-c45941915d77",
    "name": "azuki bean",
    "category": "greens",
    "price": 643
  },
  {
    "id": "7a7b0059-e8b4-4d12-87ff-f3cae6e92002",
    "name": "acorn squash",
    "category": "greens",
    "price": 769
  },
  {
    "id": "e68d90fe-9de8-4979-bfdc-0836b32b0928",
    "name": "artichoke",
    "category": "greens",
    "price": 702
  },
  {
    "id": "25b55090-7986-4d0e-9c9d-2d8af708e66e",
    "name": "beardfish",
    "category": "fish",
    "price": 524
  },
  {
    "id": "2dc112c5-fcee-4808-85ac-3a785665d802",
    "name": "piglet",
    "category": "meat",
    "price": 99
  },
  {
    "id": "bc50be9b-8f46-43e7-ad2e-fc82c4d4b9d7",
    "name": "goatling",
    "category": "meat",
    "price": 124
  },
  {
    "id": "4bd9b156-6a1b-4908-878d-d8cebf99ee8d",
    "name": "reindeer",
    "category": "meat",
    "price": 443
  },
  {
    "id": "bf49b1d9-dfdd-44d9-bba3-729b558c7d72",
    "name": "sheep",
    "category": "meat",
    "price": 156
  },
  {
    "id": "803f7e3b-2482-4d75-978f-d60a6397a3ac",
    "name": "black mackerel",
    "category": "fish",
    "price": 466
  },
  {
    "id": "9099ccf7-5c45-4889-ac5b-8410080c81bc",
    "name": "azuki bean",
    "category": "greens",
    "price": 745
  },
  {
    "id": "ddd46921-3ada-4ef0-82d8-e004f32f9019",
    "name": "pork",
    "category": "meat",
    "price": 663
  },
  {
    "id": "3ce42ecf-c919-4818-8497-3174452eefd4",
    "name": "pork",
    "category": "meat",
    "price": 379
  },
  {
    "id": "f14b05aa-6075-43a2-bb70-c81394872fcd",
    "name": "pork",
    "category": "meat",
    "price": 691
  },
  {
    "id": "7f9b17ed-af40-4f76-8464-669a91ceb1e7",
    "name": "arugula",
    "category": "greens",
    "price": 916
  },
  {
    "id": "6cdf9eb6-c993-4c6d-abeb-43027ee6d688",
    "name": "black mackerel",
    "category": "fish",
    "price": 251
  },
  {
    "id": "4180e7d9-5985-408b-ba27-6d30b42c4df0",
    "name": "mackerel",
    "category": "fish",
    "price": 899
  },
  {
    "id": "80628c54-ae07-4021-824b-40e1941399e2",
    "name": "anise",
    "category": "greens",
    "price": 247
  },
  {
    "id": "09a70406-74f4-410a-afd7-fa85b0df4df5",
    "name": "acorn squash",
    "category": "greens",
    "price": 970
  },
  {
    "id": "09e67979-7e8a-4d5c-afb7-e15069fdbcd4",
    "name": "reindeer",
    "category": "meat",
    "price": 901
  },
  {
    "id": "7a23a2ad-67ea-453c-9f5a-6d4dc786aadc",
    "name": "beef",
    "category": "meat",
    "price": 237
  },
  {
    "id": "d12d68e0-3674-4e51-9ead-8252fde7d363",
    "name": "artichoke",
    "category": "greens",
    "price": 59
  },
  {
    "id": "216858fd-ede6-4aa6-962a-99b330bb5bb7",
    "name": "blackfin tuna",
    "category": "fish",
    "price": 937
  },
  {
    "id": "588c1dec-c0ca-4cdc-b647-459461d2f01d",
    "name": "pulled pork",
    "category": "meat",
    "price": 906
  },
  {
    "id": "3b0a9736-31d0-4564-997e-3d2d379030e9",
    "name": "cod",
    "category": "fish",
    "price": 627
  },
  {
    "id": "9d52abc6-1e6a-4121-bf4e-f244aadb5b2c",
    "name": "amaranth",
    "category": "greens",
    "price": 992
  },
  {
    "id": "9d0dd8b9-a5fb-45f0-a5b6-bcf829d4255b",
    "name": "chicken",
    "category": "meat",
    "price": 368
  },
  {
    "id": "a487f2f6-5ed2-45f8-951e-a6e7e1ca24fe",
    "name": "pork",
    "category": "meat",
    "price": 770
  },
  {
    "id": "44480a3c-135a-4602-8e46-f09988145a50",
    "name": "acorn squash",
    "category": "greens",
    "price": 226
  },
  {
    "id": "8f1b51a6-5ab0-480e-890c-b8adc280706b",
    "name": "banana squash",
    "category": "greens",
    "price": 869
  },
  {
    "id": "76f1f0de-d783-48af-9b0e-3fc3670592e3",
    "name": "azuki bean",
    "category": "greens",
    "price": 502
  },
  {
    "id": "a64aad89-1891-4341-b60d-1f19538ed2ec",
    "name": "azuki bean",
    "category": "greens",
    "price": 112
  },
  {
    "id": "36beda59-a1d9-45a0-89ed-42a33afdd971",
    "name": "chicken",
    "category": "meat",
    "price": 211
  },
  {
    "id": "88e16f9f-a944-41e2-8e10-88963e14d449",
    "name": "piglet",
    "category": "meat",
    "price": 630
  },
  {
    "id": "01274654-e428-49ad-83da-2003fadf29f3",
    "name": "bindu",
    "category": "green",
    "price": "777"
  },
  {
    "id": "490b64ce-69fd-4234-b56d-56c2c2203e57",
    "name": "bindu",
    "category": "green",
    "price": "444"
  },
  {
    "id": "025e5045-bcf6-4988-9f1e-83f44f8f5935",
    "name": "bindu",
    "category": "green",
    "price": "99"
  },
  {
    "id": "ea1421db-9cbf-4863-902b-a6ddbb9ac8fb",
    "name": "carrot",
    "category": "greens",
    "price": "4343"
  },
  {
    "id": "7821e419-cfa8-4173-9f7d-346f2765ddfb",
    "name": "fish",
    "category": "meat",
    "price": "553"
  },
  {
    "id": "e2ff4d5b-b886-4cd4-a540-860ce76ac647",
    "name": "bindu",
    "category": "rrr",
    "price": "555"
  },
  {
    "id": "3465c890-f5db-4f7f-9e21-1fa7c7339bfe",
    "name": "dalitya",
    "category": "green",
    "price": "333"
  },
  {
    "id": "4607052e-cca6-486d-a88b-0b94f91f37cc",
    "name": "bindu",
    "category": "green",
    "price": "11"
  }
]; module.exports=products;