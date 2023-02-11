-- AlterTable
CREATE SEQUENCE llllll_id_seq;
ALTER TABLE "llllll" RENAME CONSTRAINT "hhklk" TO "llllll_pkey",
ALTER COLUMN "id" SET DEFAULT nextval('llllll_id_seq'),
ALTER COLUMN "name" SET DEFAULT 'qwertyuiop';
ALTER SEQUENCE llllll_id_seq OWNED BY "llllll"."id";
