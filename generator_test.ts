import { DefaultSecretGenerator } from "./generator.ts";
import { assertFalse as no, assertNotEquals as notEquals } from "jsr:@std/assert@0.225.3";

Deno.test("SecretGenerator", () => {
    const generator = new DefaultSecretGenerator();
    generator.add("abc");
    generator.add("def");
    generator.add("ghi");
    generator.add("1234567890");
    generator.add("ABCDEFGHI");
    generator.add("#_-!@");

    const secret = generator.generate(10);
    console.log(secret);
    notEquals(secret, "abcdefghi");
    no(secret.includes("j"));
    no(secret.includes("k"));
    no(secret.includes("l"));
});
