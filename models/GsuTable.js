// GsuTable.js
const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'Gsu',
    tableName: 'GSU',
    schema: 'DMAAG',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true,
        },
        timestamp: {
            type: 'varchar',
            name: 'Timestamp',
            nullable: true
        },
        emailAddress: {
            type: 'varchar',
            name: 'Email_Address',
            nullable: true
        },
        deedState: {
            type: 'varchar',
            name: 'deed_state',
            nullable: true
        },
        deedCounty: {
            type: 'varchar',
            name: 'deed_county',
            nullable: true
        },
        deedDate: {
            type: 'varchar',
            name: 'deed_date',
            nullable: true
        },
        sellerFirstName: {
            type: 'varchar',
            name: 'seller_firstname',
            nullable: true
        },
        sellerLastName: {
            type: 'varchar',
            name: 'seller_lastname',
            nullable: true
        },
        sellerCounty: {
            type: 'varchar',
            name: 'seller_county',
            nullable: true
        },
        sellerState: {
            type: 'varchar',
            name: 'seller_state',
            nullable: true
        },
        sellerAdministratorGuardian: {
            type: 'varchar',
            name: 'seller_administrator_guardian',
            nullable: true
        },
        sellerAdministratorGuardianFirstName: {
            type: 'varchar',
            name: 'seller_administrator_guardian_firstname',
            nullable: true
        },
        sellerAdministratorGuardianLastName: {
            type: 'varchar',
            name: 'seller_administrator_guardian_lastname',
            nullable: true
        },
        buyerFirstName: {
            type: 'varchar',
            name: 'buyer_firstname',
            nullable: true
        },
        buyerLastName: {
            type: 'varchar',
            name: 'buyer_lastname',
            nullable: true
        },
        buyerCounty: {
            type: 'varchar',
            name: 'buyer_county',
            nullable: true
        },
        buyerState: {
            type: 'varchar',
            name: 'buyer_state',
            nullable: true
        },
        buyerAmount: {
            type: 'varchar',
            name: 'buyer_amount',
            nullable: true
        },
        buyerPurchasedCountyDistrictLot: {
            type: 'varchar',
            name: 'buyer_purchased_county_district_lot',
            nullable: true
        },
        number: {
            type: 'varchar',
            name: 'number',
            nullable: true
        },
        lotNumberCountySection: {
            type: 'varchar',
            name: 'lotnumber_countysection',
            nullable: true
        },
        buyerPurchasedAcres: {
            type: 'varchar',
            name: 'buyerpurchased_acres',
            nullable: true
        },
        deedLink: {
            type: 'varchar',
            name: 'deed_link',
            nullable: true
        },
        notes: {
            type: 'text',
            name: 'Notes',
            nullable: true
        }
    }
});